import { Request, Response } from 'express';
import { Order } from '../../models/Order';
import { io } from '../../../index';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    const order = await Order.create({ table, products });
    const OrderDetails = await order.populate('products.product');

    io.emit('new_order', OrderDetails);
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

