## WAITSTAFF BACKEND

Out backend is built using [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/).

The Database we chose to implement in the Waitstaff app was [Mongo.db](https://www.mongodb.com/) with [Mongoose](https://www.npmjs.com/package/mongoose) as our ODM (Object Data Modelling).

The port we are using for the Database to be running is **27010** and we are using [Docker](https://www.docker.com/) to run it.

We separated the products in the models folder where it contains the categories, the products and also the orders.

In the use cases we separated the items above into folders where we have all the logic there and the logic is tied to the routes that invoke the logic in our use cases files.

In out products we are using images and to handle the upload of the images we are usign [Multer](https://www.npmjs.com/package/multer) which is a Node.js middleware to handle file upload, in our case images. Multer will intercept the request, acting as a middleware.

## TO RUN THE PROJECT

Since we are using [Yarn](https://yarnpkg.com/) as our Package Manager we will run the commands using **yarn**.

- To run in Development mode we use the command:

```javascript
yarn dev
```

The command yarn dev will execute nodemon in the page src and look for the file index.ts

- To run the command to build the project we use:

```javascript
yarn build
```

The command yarn build will execute tsc which means Typescript Compiler that will turn the Typescript code into Javascript to be understood by the browsers.

- To run our backend in Production Mode we will use the command:

```javascript
yarn start
```

This command will execute node and the folder dist which contains the code of our backend/server turned into Javascript
