export interface userType {
    username: string;
    password: string;
    id: string;
    privilege: string;
}

export interface productType {
    id: string;
    productName: string;
    price: number;
 }

export interface productFactureType {
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