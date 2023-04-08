import { useEffect, useState, useContext } from 'react'
import { BasketContext } from '../../context/context'
import { basketItemsSum } from '../../utils/utils'

const Ordering = () => {
    const [result, setResult] = useState(0)
    const { basketItems, setBasketItems } = useContext(BasketContext)

    function orderingAndClearBasket() {
        setBasketItems([])
        alert('Спасибо за заказ')
    }

    useEffect(() => {
        const sum: number = basketItemsSum(basketItems)
        setResult(Math.floor(sum * 100) / 100)
    }, [basketItems])

    return (
        <div className="ordering">
            {
                basketItems?.length !== 0
                    ?
                    <>
                        <button data-testid="ordering-btn"
                            onClick={() => orderingAndClearBasket()}
                            className='ordering__btn'
                        >
                            Оформить заказ
                        </button>

                        <div className="basket__item-price sum">
                            {result}
                        </div>
                    </>
                    :
                    <div data-testid="empty-div" className='empty__basket'>
                        Корзина пуста
                    </div>
            }
        </div>
    )
}

export default Ordering