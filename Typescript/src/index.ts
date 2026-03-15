type Category = {
    id: number,
    name: string,
    description?: string // Optional property
}

type Product = {
    id: number,
    name: string,
    description?: string, // Optional property
    price: number,
    isActive: boolean
}

const product = {
    id: 1,
    name: "Omega 3 Fish Oil",
    price: 119.90
} as Product;

const product2 = {
    id: 2,
    name: "Omega 3 1000mg",
    price: 119.90
} as Product;

const product3 = {
    id: 3,
    name: "Omega 3 120 capsulas de 1000mg",
    price: 119.90
} as Product;