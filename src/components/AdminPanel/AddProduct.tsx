import { useContext, useState } from 'react'
import { DataContext } from '../../context/context'
import { getPageCount } from '../../utils/utils'

const AddProduct = () => {
  const { products, setProducts, setTotalCount, totalCount, limit, setTotalPages } = useContext(DataContext)

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [size, setSize] = useState('')
  const [producer, setProducer] = useState('')
  const [brand, setBrand] = useState('')
  const [info, setInfo] = useState<any>([])

  const addItem = {
    id: Date.now(),
    "image_url": "/img/deafultImage.png",
    "name": name,
    "size_type": "мл",
    "size": size,
    "barcode": "4604049097548",
    "articul": "460404",
    "producer": producer,
    "brand": brand,
    "description": "Кратоке описание товара",
    "info": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis",
    "price": price,
    "type_care": info,
    "characteristic": {
      "appointment": "Назначение",
      "type": "Тип",
      "weight": "Вес",
      "volume": "Объем",
      "count": "Кол-во в коробке"
    }
  }

  const addBtnClick = () => {
    setProducts([...products, addItem])
    setTotalCount(totalCount + 1)
    setTotalPages(getPageCount(totalCount + 1, limit))
    localStorage.setItem('products', JSON.stringify([...products, addItem]))

    alert('Новый товар был добавлен')

    setName('')
    setPrice('')
    setSize('')
    setProducer('')
    setBrand('')
    setInfo([])
  }

  const addTypeCare = () => {
    setInfo([...info, { title: '', number: Date.now() }])
  }

  const changeInfo = (key: any, value: any, number: any) => {
    setInfo(info.map((i: any) =>
      i.number === number ?
        { ...i, [key]: value } :
        i
    ))
  }

  return (
    <div className='container'>
      <div className="add__wrapper">
        <div className="add__val-wrapper">
          <div className="add__val">
            <span>Название</span>

            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder='Название'
            />
          </div>

          <div className="add__val">
            <span>Размер</span>

            <input
              onChange={(e) => setSize(e.target.value)}
              type="text"
              placeholder='Размер' />
          </div>

          <div className="add__val">
            <span>Цена</span>

            <input
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder='Цена'
            />
          </div>

          <div className="add__val">
            <span>Производитель</span>

            <input
              onChange={(e) => setProducer(e.target.value)}
              type="text"
              placeholder='Производитель'
            />
          </div>
          <div className="add__val">
            <span>Брэнд</span>

            <input
              onChange={(e) => setBrand(e.target.value)}
              type="text"
              placeholder='Брэнд'
            />
          </div>

          <button
            onClick={() => addTypeCare()}
            className='type_care_btn'
          >
            Добавить тип ухода
          </button>

          <div className='type_care-inputs'>
            {
              info.map((i: any) =>
                <input
                  key={i.number}
                  value={i.title}
                  className='type_care-input'
                  onChange={(e) =>
                    changeInfo('title', e.target.value, i.number)
                  }
                  type="text"
                  placeholder='Тип ухода'
                />
              )
            }
          </div>
        </div>
      </div>
      <div className='add__btn'>
        <button onClick={addBtnClick}>
          Добавить
        </button>
      </div>
    </div >
  )
}

export default AddProduct