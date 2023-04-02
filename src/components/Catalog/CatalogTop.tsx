import { useMemo, useState, useContext, useEffect, FC, useRef } from 'react'
import { homePage, mainMenuItems, options } from '../../constants/constants'

interface ICatalogTopProps {
    value?: any
    onChange: any
    defaulValue: any
    menuItemClick: any
    active: any
}

const CatalogTop: FC<ICatalogTopProps> = ({ active, value, onChange, defaulValue, menuItemClick }) => {
    const selectImgRef = useRef<any>()

    const onSelectClick = () => {
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

                        <select onClick={() => onSelectClick()}
                            id="select__names"
                            value={value}
                            onChange={event => onChange(event.target.value)}
                        >
                            <option value='' disabled>
                                {defaulValue}
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
                            <img ref={selectImgRef}
                                className='down' src={homePage + "/img/select.svg"} alt=""
                            />
                        </a>
                    </div>
                </div>

                <ul
                    className="main__menu">
                    {
                        mainMenuItems.map((item: any) =>
                            <li key={item}
                                className={active == item ?
                                    'selected_care' :
                                    ''}
                                onClick={(e) => menuItemClick(item)}
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