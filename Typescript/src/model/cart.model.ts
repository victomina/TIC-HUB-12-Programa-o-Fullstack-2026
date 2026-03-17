import { Product } from "./product.model";


interface listProducts {
    product: Product;
    quantity: number;
}

export class Cart {
    constructor(public listProducts: listProducts[] = []) {
    }   

    addItem(product: Product, quantity: number): void {
        const existingItem = this.listProducts.find(item => item.product.title === product.title);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.listProducts.push({ product, quantity });
        }
    }

    get totalPrice(): number {
        return this.listProducts.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
    

}