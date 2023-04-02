import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { BasketContext, DataContext } from '../../context/context'

const OneProductUpdate = () => {
    const params = useParams()

    const { products, setProducts } = useContext(DataContext)
    const { basketItems, setBasketItems } = useContext(BasketContext)

    const [product, setProduct] = useState<any>({})
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState('')
    const [producer, setProducer] = useState('')
    const [brand, setBrand] = useState('')

    const fetchingById = () => {
        let newElem = [...products].filter((p: any) => p.id == params.id)

        setProduct(newElem)
        setName(newElem[0]?.name)
        setSize(newElem[0]?.size)
        setProducer(newElem[0]?.producer)
        setBrand(newElem[0]?.brand)
        setPrice(newElem[0]?.price)
    }

    useEffect(() => {
        fetchingById()
    }, [params.id])

    let updateItem = {
        ...product[0],
        name: name,
        size: size,
        producer: producer,
        price: price,
        brand: brand,
    }

    const saveСhanges = (id: any) => {
        setProducts(products.map((elem: any) => elem.id == id ? updateItem : elem))

        localStorage.setItem('products', JSON.stringify(products.map((elem: any) =>
            elem.id == id ? updateItem : elem)))

        setBasketItems(basketItems.map((elem: any) =>
            elem.id == id ? { ...elem, price: price } : elem))

        localStorage.setItem('basketItems', JSON.stringify(basketItems.map((elem: any) =>
            elem.id == id ? { ...elem, price: price } : elem)))

        alert('Изменения сохранены')
    }

    return (
        <div className='container'>
            <div className="one__update">
                <div className="one__update-wrapper">
                    <div className="one__update__value">
                        <span>Название</span>

                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                        />
                    </div>

                    <div className="one__update__value">
                        <span>Размер</span>

                        <input
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            type="text"
                        />
                    </div>

                    <div className="one__update__value">
                        <span>Цена</span>

                        <input
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            type="text"
                        />
                    </div>

                    <div className="one__update__value">
                        <span>Производитель</span>

                        <input
                            value={producer}
                            onChange={(e) => setProducer(e.target.value)}
                            type="text"
                        />
                    </div>
                    <div className="one__update__value">
                        <span>Брэнд</span>
                        <input
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            type="text"
                        />
                    </div>
                </div>


            </div >
            <div className='update__btn'>
                <button onClick={() => saveСhanges(product[0]?.id)}>
                    Сохранить изменения
                </button>
            </div>
        </div >
    )
}

export default OneProductUpdate
