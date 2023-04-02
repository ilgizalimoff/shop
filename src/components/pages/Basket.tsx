import { useContext } from 'react'
import { BasketContext } from '../../context/context'
import BasketItem from '../Basket/BasketItem'
import Ordering from '../Basket/Ordering'

export default function Basket() {
  const { basketItems, setBasketItems } = useContext(BasketContext)

  function removeFromBasket(id: any) {
    let newArr = basketItems.filter((el: any) => el.id !== id)

    setBasketItems(newArr)
    localStorage.setItem('basketItems', JSON.stringify(newArr))
  }

  return (
    <section className='basket'>
      <div className="container">
        <div className="basket__wrapper">
          <h2 className="basket__title">
            Корзина
          </h2>

          <div className="basket__items">
            {
              basketItems.map((el: any) =>
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
