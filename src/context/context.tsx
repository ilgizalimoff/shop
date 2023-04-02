import { createContext } from "react";

export const initialBasketItems = JSON.parse(localStorage.getItem('basketItems') || '[]')

export const BasketContext = createContext(initialBasketItems)

export const initialProducts = JSON.parse(localStorage.getItem('products') || '[]')

export const DataContext = createContext(initialProducts)
