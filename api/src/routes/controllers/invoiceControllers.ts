// import { invoiceType } from "../../typos";

const { Invoice, Product} = require("../../database");

export const getAllInvoices = async ( ) => {
  try {
    const result = await Invoice.findAll({include: Product});
    if(result){
      return result;
    }
    else{
      return "no se encontraron facturas";
    }
    
  } catch (error: any) {
    console.log(error)
            throw new Error(error);
  }
};

export const createInvoice = async(body: any) => {
        try {
          console.log(body); 
        const result = await Invoice.create({
          name: body.name,
          ruc: body.ruc,
          totalPrice: body.totalPrice,
          invoiceNumber: body.invoiceNumber,
        });
        let auxTotalPrice: number = 0;

        
        for (const product of body.products as any){
          const findProduct = await Product.findByPk(product.id);
          console.log("findProduct", findProduct)
          if(findProduct){
            await result.addProducts(findProduct, {through: {kilograms: product.kilograms, subPrice: findProduct.price * product.kilograms}});
            console.log("totlprice1", auxTotalPrice)
            auxTotalPrice += (findProduct.price * product.kilograms);
            console.log("totlprice3", auxTotalPrice)
          }
        }
        console.log("result", result);
         await result.update({totalPrice: auxTotalPrice});
        return result;
         
        } catch (error: any) {
          console.log(error)
            throw new Error(error);
        }


};


