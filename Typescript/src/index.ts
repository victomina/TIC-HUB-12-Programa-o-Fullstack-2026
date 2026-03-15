type Category = {
    id: number,
    name: string,
    description?: string // Optional property
}

type Shipping = {
    status: 'FREE' | 'CORREIOS' | 'PAC' | 'SEDEX'| 'AMAZON',
    id: number,
    name: string,
    price: number,
    estimatedDeliveryTime: string
}

type Product = {
    id: number,
    name: string,
    imgUrl?: string, // Optional property
    description?: string, // Optional property
    price: number,
    isActive: boolean,
    descount?: number, // Optional property
    shipping?: number, // Optional property
    category: {
        name: string,
        description?: string // Optional property
    },
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