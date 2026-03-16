import { Category } from "./category.model";
export class Product {

    constructor(public title: string, public price: number, public imagemeUrl?: string, public category?: Category, public discount?: number ){

    }
    
    priceWithDiscountApplied(discount: number): number {
        return this.price - (this.price * discount);
    }

} 