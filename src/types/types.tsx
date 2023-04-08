export interface IProduct {
    image_url: string,
    name: string,
    size_type: string,
    size: string,
    barcode: number,
    producer: string,
    brand: string,
    description: string,
    price: string,
    id: number
    count?: number
}

export interface IProductInBasket extends IProduct {
    count: number
}
