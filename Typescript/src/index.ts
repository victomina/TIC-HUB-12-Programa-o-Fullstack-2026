
import { Product } from "./model/product.model";
import { Category } from "./model/category.model";
import { Cart } from "./model/cart.model";

const category = new Category("1", "Suplementos");
const product = new Product("001", "Omega 3 Fish Oil", 119.90, "https://example.com/omega3.jpg", category, 0.2);

const cart = new Cart( );
cart.addItem(product, 2);

console.log("Meu primeiro produto",product.category?.title);
console.log("Preço com desconto",product.priceWithDiscountApplied(0.2));
console.log("Carrinho de compras", cart.listProducts);
console.log("Preço total do carrinho", cart.totalPrice);
