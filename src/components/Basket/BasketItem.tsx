import { useState, FC, useContext } from 'react'
import { BasketContext } from '../../context/context'
import { homePage } from '../../constants/constants'
import { changePriceToString } from '../../utils/utils'
import { IProductInBasket } from '../../types/types'

interface IBasketItemProps {
    value: IProductInBasket,
    removeFromBasket: (id: number) => void,
}

const BasketItem: FC<IBasketItemProps> = ({ value, removeFromBasket }) => {
    const [count, setCount] = useState(value.count)

    const { basketItems, setBasketItems } = useContext(BasketContext)

    function incrementCount(id: number, countValue: number) {
        setBasketItems(
            basketItems.map((element: IProductInBasket) => {
                if (element.id == id) {
                    setCount(countValue + 1)
                    return { ...element, count: countValue + 1 }
                }
                else {
                    return { ...element }
                }
            })
        )
    }

    function decrementCount(id: number, countValue: number) {
        setBasketItems(
            basketItems.map((element: any) => {
                if (element.id == id) {
                    setCount(countValue - 1)
                    return { ...element, count: countValue - 1 }
                }
                else {
                    return { ...element }
                }
            })
        )
    }

    return (
        <div data-testid='basket-item'
            className="basket__item">
            <div className="basket__item-img">
                <img src={homePage + value?.image_url} />
            </div>

            <div className="basket__item-description-wrapper">
                <div className="basket__item-description">
                    <div className="basket__item-size">
                        <img
                            src={
                                value.size_type == 'мл'
                                    ? homePage + '/img/volume.svg'
                                    : homePage + '/img/weight.svg'
                            }
                        />
                        <span>
                            {value?.size} {value?.size_type}
                        </span>
                    </div>

                    <h3
                        className="basket__item-name">
                        {value?.name}
                        {value?.description}
                    </h3>

                    <div className='basket__item-description-value'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                            Quis mattis vulputate feugiat massa vestibulum duis.
                        </p>
                    </div>
                </div>

                <div className="basket__params">
                    <div className='vertical__line'></div>

                    <div className="card__inputs">
                        <button onClick={() => decrementCount(value.id, value.count)}>
                            -
                        </button>

                        <span>{count}</span>

                        <button onClick={() => incrementCount(value.id, value.count)}>
                            +
                        </button>
                    </div>

                    <div className='vertical__line'></div>

                    <div className="basket__item-price">
                        {
                            changePriceToString(value?.price, count)
                        } ₸
                    </div>

                    <div className='vertical__line'></div>

                    <img
                        onClick={() => removeFromBasket(value?.id)}
                        src={homePage + "/img/remove.svg"}
                    />
                </div>
            </div>
        </div>
    )
}

export default BasketItem