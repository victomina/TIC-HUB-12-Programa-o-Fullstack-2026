export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public description: string,
    public discount: number,
  ) {}
  getPrice(){
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL ' }).format(this.price * (1 - this.discount / 100))
  }
}
