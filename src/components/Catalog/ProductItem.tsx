import { FC, useContext } from 'react'
import { IProduct } from '../../types/types'
import { Link } from "react-router-dom";
import { BasketContext } from '../../context/context';

interface ProductItemProps {
    product: IProduct,
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
    const { basketItems, setBasketItems } = useContext(BasketContext)

    function onBasketClick(id: any) {
        if (!basketItems.find((item: any) => item.id == id)) {
            let newProduct: any = product

            newProduct.count = 1

            let newArr = [...basketItems, newProduct]

            setBasketItems(newArr)
            localStorage.setItem('basketItems', JSON.stringify(newArr))
        } else {
            let newArr = basketItems.filter((el: any) => el.id !== id)

            setBasketItems(newArr)
            localStorage.setItem('basketItems', JSON.stringify(newArr))
        }
    }

    return (
        <div className="product__item">
            <div className="item__img">
                <img src={'.' + product.image_url} />
            </div>

            <div className="item__description">
                <div className="size">
                    <img src=
                        {
                            product.size_type == 'мл'
                                ? './img/volume.svg'
                                : './img/weight.svg'
                        }
                    />

                    <span>
                        {product.size} {product.size_type}
                    </span>
                </div>
                <div className="name">
                    <Link to={'/catalog/' + product.id}>
                        <b>{product.name}</b> {product.description}
                    </Link>
                </div>

                <div className="barcode">
                    <h4>Штрихкод:</h4>
                    <p> {product.barcode} </p>
                </div>

                <div className="producer">
                    <h4> Производитель:</h4>
                    <p>{product.producer}</p>
                </div>

                <div className="brand">
                    <h4>Бренд:</h4>
                    <p>{product.brand}</p>
                </div>

                <div className="price__wrapepr">
                    <span className="price">
                        {product.price} ₸
                    </span>
                    {
                        <button
                            onClick={() => onBasketClick(product.id)}
                            className={
                                basketItems.find((item: any) => item.id == product.id) ?
                                    "onbasket__select" :
                                    "onbasket"
                            }
                        >
                            {
                                basketItems.find((item: any) => item.id == product.id) ?
                                    'В корзине' :
                                    'В корзину'
                            }
                        </button>
                    }
                </div>
            </div>
        </div >
    )
}

export default ProductItem