import { Link } from 'react-router-dom'

const AdminPanel = () => {

  return (
    <div className="container">
      <div className='admin__wrapper'>
        <Link to='/admin/add'>
          <button>Добавить товар</button>
        </Link>

        <Link to='/admin/remove'>
          <button>Удалить товар</button>
        </Link>

        <Link to='/admin/update'>
          <button>Изменить товар</button>
        </Link>
      </div>
    </div>
  )
}

export default AdminPanel