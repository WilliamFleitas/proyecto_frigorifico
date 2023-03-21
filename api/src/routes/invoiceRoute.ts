import { Router, Request, Response } from "express";
import { createInvoice } from "./controllers/invoiceControllers";
const route = Router();



route.post("/createinvoice", async (req: Request, res: Response) => {
    const  body  = req.body;
    try {
       const result = await createInvoice(body);
       console.log("resultdelresult", result);
       res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }

});

export default route;