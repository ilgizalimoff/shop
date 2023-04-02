import Params from '../Catalog/Params'
import CatalogTop from '../Catalog/CatalogTop'
import { useState, useEffect, useContext } from 'react'
import Pagination from '../Catalog/Pagination'
import { changePriceToNumber } from '../../utils/utils'
import ProductList from '../Catalog/ProductList'
import { DataContext } from '../../context/context'
import { items } from '../../constants/constants'

const Catalog = () => {
  const { products, limit, setCurrentPage, currentPage } = useContext(DataContext)

  const [filter, setFilter] = useState('')
  const [currentItems, setCurrentItems] = useState<any>([])
  const [active, setActiveClass] = useState('Все')

  function fetchDataFromLocalstorage() {
    setCurrentItems(products.slice((currentPage - 1) * limit, currentPage * limit))
  }

  const sortProducts = (sort: any) => {
    setFilter(sort)

    switch (sort) {
      case 'price':
        setCurrentItems([...currentItems].sort((a: any, b: any) =>
          changePriceToNumber(b.price) - changePriceToNumber(a.price)))
        break;

      case 'name': setCurrentItems([...currentItems].sort((a, b) =>
        a[sort].localeCompare(b[sort])))
        break;

      case 'pricetop': setCurrentItems([...currentItems].sort((a: any, b: any) =>
        changePriceToNumber(a.price) - changePriceToNumber(b.price)))
        break;

      case 'nametop': setCurrentItems([...currentItems].sort((a, b) =>
        b['name'].localeCompare(a['name'])))
        break;

      default:
        break;
    }
  }

  const menuItemClick = (item: any) => {
    setActiveClass(item)
    if (item !== 'Все') {
      setCurrentItems([...products.slice((currentPage - 1) * limit, currentPage * limit)].filter((elem: any) =>
        elem.type_care.find((el: any) => {
          return el.title.toLowerCase() == item.toLowerCase() ? true : false
        }
        )))
    }
    else {
      setCurrentItems(products.slice((currentPage - 1) * limit, currentPage * limit))
    }

  }

  const changePage = (page: number) => {
    setCurrentItems(products.slice((page - 1) * limit, page * limit))
    setCurrentPage(page)
  }

  useEffect(() => {
    fetchDataFromLocalstorage()
  }, [products])

  return (
    <>
      <CatalogTop
        value={filter}
        defaulValue='Сортировка'
        onChange={sortProducts}
        menuItemClick={menuItemClick}
        active={active}
      />

      <section className="catalog">
        <div className="container">
          <div className="catalog__wrapper">
            <div className="left__menu">
              <Params
                menuItemClick={menuItemClick}
                active={active}
              />
            </div>

            <div className="product__items-wrapper">
              <ProductList
                products={currentItems}
              />

              < Pagination
                changePage={changePage}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Catalog