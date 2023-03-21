import { invoiceType } from "../../typos";

const { Invoice, Product} = require("../../database");


export const createInvoice = async(body: invoiceType) => {
        try {
          console.log(body); 
        const result = await Invoice.create({
          name: body.name,
          ruc: body.ruc,
          totalPrice: body.totalPrice,
          invoiceNumber: body.invoiceNumber,
          Products: body.products
        });
        
        
            const newProduct = await Product.findAll({where : {productName: body.products.productName}});
             console.log("newProduct", newProduct);
              result.addProduct(newProduct)
         
        } catch (error: any) {
          console.log(error)
            throw new Error(error);
        }


};


