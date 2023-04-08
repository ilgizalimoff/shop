import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react'
import AppRouther from './components/AppRouther';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { getPageCount, setProductsInLocalstorage } from './utils/utils';

import {
  BasketContext,
  initialBasketItems,
  DataContext,
  initialProducts
}
  from "./context/context"

function App() {
  const [basketItems, setBasketItems] = useState([])
  const [products, setProducts] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [totalCount, setTotalCount] = useState(initialProducts.length)

  function fetchData() {
    setProducts(initialProducts)
    setBasketItems(initialBasketItems)
    setTotalPages(getPageCount(totalCount, limit))
  }

  useEffect(() => {
    setProductsInLocalstorage()
    fetchData()
  }, [])

  return (
    <div className="App">
      <DataContext.Provider
        value={
          {
            products,
            setProducts,
            totalPages,
            setTotalPages,
            setCurrentPage,
            currentPage,
            limit,
            totalCount,
            setTotalCount
          }
        }>
        <BasketContext.Provider
          value={{ basketItems, setBasketItems }}>
          <BrowserRouter>
            <Header />
            <AppRouther />
            <Footer />
          </BrowserRouter>
        </BasketContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
