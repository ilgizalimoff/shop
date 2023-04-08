import { FC } from 'react'
import ProductItem from './ProductItem'
import { IProduct } from '../../types/types'

interface IProductListProps {
    products: IProduct[],
}

const ProductList: FC<IProductListProps> = ({ products }) => {
    return (
        <div className="product__items">
            {
                products?.map((product: IProduct) =>
                    <ProductItem
                        data-testid='product-item'
                        key={product.id}
                        product={product}
                    />
                )
            }
        </div>
    )
}

export default ProductList