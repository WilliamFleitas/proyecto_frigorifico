import { Router, Request, Response } from "express";
import { createInvoice, getAllInvoices } from "./controllers/invoiceControllers";
const route = Router();

route.get("/invoices", async (_req: Request, res: Response) => {
    try {
        const result = await getAllInvoices();
        res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }
});

route.post("/createinvoice", async (req: Request, res: Response) => {
    const  body  = req.body;
    try {
       const result = await createInvoice(body);
       res.status(200).send(result);
    } catch (error: any) {
        res.status(400).send(error.message);
    }

});

export default route;