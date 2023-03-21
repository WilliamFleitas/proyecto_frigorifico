import {productType} from "../../typos";

const { Product} = require("../../database");

export const getProducts = async () => {
    try {
        const findProducts = await Product.findAll();
        if(findProducts.length){
            return findProducts;
        }
        else{
            throw new Error("No se encontraron productos");
        }
    } catch (error: any) {
        throw new Error(error);
    }
};


export const createProduct = async(body: productType) => {
        try {
          console.log(body); 
        const findProduct = await Product.findAll({where: {productName: body.productName}});
        console.log("find", findProduct)
        if(findProduct.length){
            throw new Error("Ya existe ese producto");
        }
        const result = await Product.create(body);
        
        if (result) {
            return result;
          } else {
            throw new Error("no se pudo crear el producto");
          }
        } catch (error: any) {
            throw new Error(error);
        }


};

