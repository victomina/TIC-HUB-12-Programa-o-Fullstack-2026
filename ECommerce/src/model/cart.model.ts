import type { Product } from './product.model'
interface CartItem {
  product: Product
  quantity: number
  id: number
}

export class Cart {
  constructor(
    public list: CartItem[] = [],
    public total: number = 0,
  ) {}
}
