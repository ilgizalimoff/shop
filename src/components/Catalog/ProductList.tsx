import { FC } from 'react'
import ProductItem from './ProductItem'

interface IProductListProps {
    products: any,
}

const ProductList: FC<IProductListProps> = ({ products }) => {
    return (
        <div className="product__items">
            {
                products.map((product: any) =>
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                )
            }
        </div>
    )
}

export default ProductList