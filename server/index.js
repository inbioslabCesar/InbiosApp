import express from "express";
import cors from "cors";
import indexRoutes from "./src/router/index.routes.js";
import productsRoutes from "./src/router/products.routes.js";

const app = express();
//middleware
app.use(cors());
app.use(express.json());

//routes
app.use(indexRoutes);
app.use(productsRoutes);

app.listen(9000);

console.log(`server on port ${9000}`);
