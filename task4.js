class Product 
{
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
    }
     logProduct() {
        console.log(`${this.name} cost  ${this.price} kr.`);
   }
} 
const table = new Product('table', 1200);
table.logProduct();  // 'Table costs 1200 kr