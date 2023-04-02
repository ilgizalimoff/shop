import { FC, useContext } from 'react'
import { DataContext } from '../../context/context'
import { getPagesArray } from '../../utils/utils'

interface IPaginationProps {
    changePage: any
}

const Pagination: FC<IPaginationProps> = ({ changePage }) => {
    const { totalPages, currentPage } = useContext(DataContext)
    const pagesArray = getPagesArray(totalPages)

    return (
        <div className="pagination__wrapper">
            <div className='pagination'>
                <img src="./img/left.svg" alt="" />

                <ul className="page__items">
                    {
                        pagesArray.map(p =>
                            <li
                                onClick={() => changePage(p)}
                                key={p}
                                className={
                                    currentPage === p
                                        ? 'page__item active__page'
                                        : 'page__item'
                                }
                            >
                                <span >{p}</span>
                            </li>)
                    }
                </ul>

                <img src="./img/right.svg" />
            </div >
        </div >
    )
}

export default Pagination
