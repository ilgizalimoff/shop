import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';
import AppRouther from './components/AppRouther';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BasketContext, initialBasketItems, DataContext } from "./context/context"
import Service from './API/Service';
import { getPageCount } from './utils/utils';
import { items } from './constants/constants';

function App() {
  const [basketItems, setBasketItems] = useState(initialBasketItems)
  const [products, setProducts] = useState<any>([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [totalCount, setTotalCount] = useState<any>(items.length)
  async function fetchData() {
    // const response = await Service.fetchData(limit, currentPage)
    // const totalCount = response?.headers['x-total-count']
    // setProducts(response?.data)
    // localStorage.setItem('products', JSON.stringify(response?.data))
    // setTotalPages(getPageCount(totalCount, limit))

    //Добавил вторую версию, чтобы можно было работать с большим количеством данных

    setTotalCount(items.length)
    setProducts(items)
    localStorage.setItem('products', JSON.stringify(items))
    setTotalPages(getPageCount(totalCount, limit))
  }

  useEffect(() => {
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
          </BrowserRouter>
          <Footer />
        </BasketContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
