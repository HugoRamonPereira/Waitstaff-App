import express from 'express';
import http from 'node:http';
import path from 'node:path';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect(process.env.URL_CONNECT_DB || 'mongodb://localhost:27017')
  .then(() => {
    const port = process.env.PORT;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
    app.use(express.json());
    app.use(router);

    server.listen(port, () => {
      console.log(`🔥 Server is running on http://localhost:${port}`);
    });
  })
  .catch(() => console.error('Failed to connect to Mongo'));
