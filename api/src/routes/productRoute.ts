import { Router, Request, Response } from "express";
import { createProduct, getProducts } from "./controllers/productControllers";
const route = Router();

route.get("/allproducts", async (_req: Request, res: Response) => {
        try {
            const result = await getProducts();
            res.status(200).send(result);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
});

route.post("/createproduct", async (req: Request, res: Response) => {
    const  body  = req.body;
    try {
       const result = await createProduct(body);
       console.log("resultproduct", result);
       
        res.status(200).send(result);
       
    } catch (error: any) {
        res.status(400).send(error.message);
    }

});

export default route;