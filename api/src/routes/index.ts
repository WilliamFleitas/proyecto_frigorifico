import { Router } from "express";
const routes = Router();
import userAuth from "./authRoute";

routes.use("/api/auth", userAuth);
export default routes;