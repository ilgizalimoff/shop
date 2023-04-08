import { FC, useRef } from 'react'
import { homePage, typeCareItems, options } from '../../constants/constants'

interface ICatalogTopProps {
    sortMethod: string
    onChange: (e: any) => void
    typeCareItemClick: (item: string) => void
    activeTypeCare: string
}

const CatalogTop: FC<ICatalogTopProps> = ({
    activeTypeCare,
    sortMethod,
    onChange,
    typeCareItemClick
}) => {
    const selectImgRef = useRef<any>()

    const sortSelectClick = () => {
        selectImgRef.current.style.transform == 'rotate(180deg)' ?
            selectImgRef.current.style.transform = 'rotate(0deg)' :
            selectImgRef.current.style.transform = 'rotate(180deg)'
    }

    return (
        <section className="main">
            <div className="container">
                <div className="page">
                    <span>Главная</span>
                    <span>Косметика и гигиена</span>
                </div>

                <div className="title">
                    <h1>Косметика и гигиена</h1>

                    <div className="sort">
                        <span>Сортировка:</span>

                        <select
                            onClick={() => sortSelectClick()}
                            id="select__names"
                            value={sortMethod}
                            onChange={event => onChange(event.target.value)}
                        >
                            <option value='' disabled>
                                Сортировка
                            </option>

                            {
                                options.map((option: any) =>
                                    <option
                                        key={option.value}
                                        value={option.value}>
                                        {option.name}
                                    </option>
                                )
                            }
                        </select>

                        <a>
                            <img
                                ref={selectImgRef}
                                className='down'
                                src={homePage + "/img/select.svg"}
                            />
                        </a>
                    </div>
                </div>

                <ul
                    className="main__menu">
                    {
                        typeCareItems.map((item: any) =>
                            <li key={item}
                                className={activeTypeCare == item ?
                                    'selected_care' :
                                    ''}
                                onClick={(e) => typeCareItemClick(item)}
                            >
                                <a>
                                    {item}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default CatalogTop