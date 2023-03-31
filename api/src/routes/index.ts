import { Router } from "express";
const routes = Router();
import userAuth from "./authRoute";
import invoices from "./invoiceRoute";
import products from "./productRoute";

routes.use("/api/auth", userAuth);
routes.use("/api/invoices", invoices);
routes.use("/api/products", products);
export default routes;