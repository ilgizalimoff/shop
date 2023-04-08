import { BasketContext, DataContext } from "../../context/context"
import { useContext } from 'react'
import { getPageCount } from "../../utils/utils"

const RemoveProduct = () => {
  const {
    products,
    setProducts,
    totalCount,
    setTotalCount,
    setTotalPages,
    limit
  } = useContext(DataContext)
  
  const { basketItems, setBasketItems } = useContext(BasketContext)

  const removeProduct = (id: number) => {
    setProducts(products.filter((el: any) => el.id !== id))
    setBasketItems(basketItems.filter((el: any) => el.id !== id))
    setTotalCount(totalCount - 1)
    setTotalPages(getPageCount(totalCount - 1, limit))
  }

  return (
    <div className='container'>
      <div className="remove__wrapper">
        {
          products.map((item: any) =>
            <div
              key={item.id}
              className="remove__item"
            >
              <div className="remove__item-infoo">
                {item.description}
              </div>

              <button
                onClick={() => removeProduct(item.id)}
              >
                Удалить
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default RemoveProduct