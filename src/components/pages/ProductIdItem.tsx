import { useEffect, useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BasketContext, DataContext } from '../../context/context'
import { homePage } from '../../constants/constants'

const ProductIdItem = () => {
  const { basketItems, setBasketItems } = useContext(BasketContext)
  const { products } = useContext(DataContext)

  const params = useParams()

  const [product, setProduct] = useState<any>({})
  const [count, setCount] = useState<any>(1)

  async function fetchingById() {
    let newElem = [...products].filter((p: any) => p.id == params.id)
    setProduct(newElem)

    basketItems.forEach((element: any) => {
      element.id == params.id ?
        setCount(element.count) :
        setCount(1)
    });
  }

  useEffect(() => {
    fetchingById()
  }, [params.id])

  function onBasketClick(id: any) {
    if (!basketItems.find((item: any) => item.id == id)) {
      let newProduct: any = product[0]

      newProduct.count = count

      let newArr = [...basketItems, newProduct]

      setBasketItems(newArr)
      localStorage.setItem('basketItems', JSON.stringify(newArr))
    } else {
      let newArr = basketItems.filter((el: any) => el.id !== id)

      setBasketItems(newArr)
      localStorage.setItem('basketItems', JSON.stringify(newArr))
    }
  }

  function incrementCount() {
    basketItems.find((item: any) => item.id == params.id) ?
      setCount(count) :
      setCount(count + 1)
  }

  function decrementCount() {
    basketItems.find((item: any) => item.id == params.id) ?
      setCount(count) :
      setCount(count - 1)
  }

  return (
    <section className='card'>
      <div className="container">
        <div className="page__name">
          <span>Главная</span>
          <span>
            <Link to={'/catalog'}>
              Каталог
            </Link>
          </span>
          <span className='page__name-value'>{product[0]?.description}</span>
        </div>
        <div className="card__wrapper">
          <div className="img__block">
            <img
              src={
                homePage + product[0]?.image_url
              }
            />
          </div>

          <div className="card__description">
            <div className="presence">
              В наличии
            </div>

            <div className="card__name">
              <span> {product[0]?.name} </span>

              <span>
                {product[0]?.description}
              </span>
            </div>

            <div className="card__size-type">
              <img src={
                product[0]?.size_type == 'мл' ?
                  homePage + '/img/volume.svg' :
                  homePage + '/img/weight.svg'
              }
              />

              <span>
                {product[0]?.size} {product[0]?.size_type}
              </span>
            </div>

            <div className="card__price">
              <span>

                {
                  String(
                    Number(product[0]?.price?.replace(',', '.') *
                      Number(count)).toFixed(2)
                  )
                }
              </span>

              <div className="card__inputs">
                <button
                  onClick={() => decrementCount()}
                >
                  -
                </button>
                <span>
                  {count}
                </span>

                <button
                  onClick={() => incrementCount()}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => onBasketClick(product[0]?.id)}
                className={
                  !basketItems.find((item: any) => item.id == product[0]?.id) ?
                    'onbasket__btn' :
                    'onbasket__btn-select'
                }
              >
                {
                  !basketItems.find((item: any) => item.id == product[0]?.id) ?
                    'В корзину' :
                    'В корзине'
                }
              </button>
            </div>

            <div className="share">
              <div className="share__icon">
                <img src={homePage + "/img/share.svg"} />
              </div>

              <div className="share__description">
                При покупке от<b> 10 000 ₸</b> бесплатная доставка по Кокчетаву и области
              </div>

              <div className="price__list">
                <span>Прайс-лист</span>

                <img src={homePage + "/img/gray-download.svg"} />
              </div>
            </div>

            <div className="card__info">
              <ul className="card__info-top">
                <li>
                  <span> Производитель:</span>
                  <h3>
                    {product[0]?.producer}
                  </h3>
                </li>

                <li>
                  <span>Бренд:</span>
                  <h3>
                    {product[0]?.brand}
                  </h3>
                </li>

                <li>
                  <span>Артикул:</span>
                  <h3>
                    {product[0]?.articul}
                  </h3>
                </li>

                <li>
                  <span>Штрихкод:</span>
                  <h3>
                    {product[0]?.barcode}
                  </h3>
                </li>
              </ul>

              <div className="desc__btn">
                <div className="desc__btn-header">
                  <h3>Описание</h3>

                  <img src={homePage + "/img/select.svg"} />
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam interdum ut justo, vestibulum sagittis iaculis iaculis.
                  Quis mattis vulputate feugiat massa vestibulum duis. Faucibus
                  consectetur aliquet sed pellentesque consequat consectetur congue
                  mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                </p>
              </div>

              <div className="characteristic">
                <div className="characteristic__header">
                  <h3>Характеристики</h3>
                  <img src={homePage + "/img/select.svg"} alt="" />
                </div>

                <ul className="characteristic__info">
                  <li>
                    <span> Назначение:</span>
                    <h3>
                      BioMio
                    </h3>
                  </li>

                  <li>
                    <span>Тип:</span>
                    <h3>
                      BioMio
                    </h3>
                  </li>

                  <li>
                    <span>Производитель:</span>
                    <h3>
                      {product[0]?.producer}
                    </h3>
                  </li>

                  <li>
                    <span>Бренд:</span>
                    <h3>
                      {product[0]?.brand}
                    </h3>
                  </li>

                  <li>
                    <span>Артикул:</span>
                    <h3>
                      {product[0]?.articul}
                    </h3>
                  </li>

                  <li>
                    <span>Штрихкод:</span>
                    <h3>
                      {product[0]?.barcode}
                    </h3>
                  </li>

                  <li>
                    <span>Вес:</span>
                    <h3>
                      90 г
                    </h3>
                  </li>

                  <li>
                    <span>Объем:</span>
                    <h3>
                      90 г
                    </h3>
                  </li>

                  <li>
                    <span>Кол-во в коробке:</span>
                    <h3>
                      90 г
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductIdItem