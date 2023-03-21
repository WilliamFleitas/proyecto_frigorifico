export interface userType {
    username: string;
    password: string;
    id: string;
    privilege: string;
}

export interface productType {
    productName: string,
    price: number,
 }

interface productFactureType {
   productName: string,
   price: number,
   kilograms: number,
   subTotal: number 
}

export interface invoiceType {
    id: string,
    name: string,
    ruc: number,
    invoiceNumber: number,
    totalPrice: number,
    products: productFactureType
}