import { Product } from "./product.model";


interface listProducts {
    product: Product;
    quantity: number;
}

export class Cart {
    constructor(public listProducts: listProducts[] = []) {
    }   
}