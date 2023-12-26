export interface OrderServerFormat {
    mainItem: string,
    extras: string[],
    customer: {
        name: string,
        email: string,
        phone: string,
        address: string
    }
}


