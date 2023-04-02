import { FC, useEffect, useState, useContext } from 'react'
import { BasketContext } from '../../context/context'

const Ordering = () => {
    const [result, setResult] = useState<any>()
    const { basketItems, setBasketItems } = useContext(BasketContext)

    function orderingAndClearBasket() {
        setBasketItems([])
        alert('Спасибо за заказ')
    }

    useEffect(() => {
        let sum =
            basketItems.reduce((acc: any, curval: any) =>
                acc + (Number(curval.price.replace(',', '.')) * curval.count), 0)

        setResult(sum.toFixed(2))
    }, [basketItems])

    return (
        <div className="ordering">
            {
                basketItems.length !== 0
                    ?
                    <>
                        <button
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
                    <div className='empty__basket'>
                        Корзина пуста
                    </div>
            }
        </div>
    )
}

export default Ordering