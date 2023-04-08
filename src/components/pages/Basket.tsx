import { useContext } from 'react'
import { BasketContext } from '../../context/context'
import BasketItem from '../Basket/BasketItem'
import Ordering from '../Basket/Ordering'
import { IProductInBasket } from '../../types/types'

export default function Basket() {
  const { basketItems, setBasketItems } = useContext(BasketContext)

  function removeFromBasket(id: number) {
    let newArr = basketItems.filter((el: IProductInBasket) => el.id !== id)

    setBasketItems(newArr)
    localStorage.setItem('basketItems', JSON.stringify(newArr))
  }

  return (
    <section
      data-testid="basket-page"
      className='basket'
    >
      <div className="container">
        <div className="basket__wrapper">
          <h2 className="basket__title">
            Корзина
          </h2>

          <div className="basket__items">
            {
              basketItems?.map((el: IProductInBasket) =>
                <BasketItem
                  key={el.id}
                  value={el}
                  removeFromBasket={removeFromBasket}
                />
              )
            }
          </div>

          <Ordering />
        </div>
      </div>
    </section>
  )
}
