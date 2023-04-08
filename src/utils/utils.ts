import { localProducts } from "../constants/constants"
import { IProductInBasket } from "../types/types"

export const getPageCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: number) => {
    let result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result
}

export const changePriceToNumber = (price: string) => {
    return Number(price.replace(',', '.').replace(' ', ''))
}

export const changePriceToString = (price: string, count: number) => {
    return String(
        (
            Number(price.replace(',', '.'))
            *
            Number(count)
        ).toFixed(2)
    )
}

export const setProductsInLocalstorage = () => {
    localStorage.setItem('products', JSON.stringify(localProducts))
}

export const basketItemsSum = (basketItems: IProductInBasket[]) => {
    return basketItems?.reduce(((accumulator: number, currentValue: IProductInBasket) =>
        accumulator + (changePriceToNumber(currentValue.price)) * currentValue.count), 0)
}