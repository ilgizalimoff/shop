import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/context'

const UpdateProduct = () => {
  const { products } = useContext(DataContext)

  return (
    <div className='container'>
      <div className="update__wrapper">
        {
          products.map((item: any) =>
            <div key={item.id} className="update__item">
              <div className="update__item-info">
                {item.description}
              </div>
              <Link
                className='update'
                to={'/admin/update/' + item.id}>
                Изменить
              </Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default UpdateProduct