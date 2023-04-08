import { FC } from "react"
import { homePage, typeCareItems } from '../../constants/constants'

interface IParamsProps {
    typeCareItemClick: (item: string) => void
    activeTypeCare: string
}

const Params: FC<IParamsProps> = ({ typeCareItemClick, activeTypeCare }) => {
    return (
        <>
            <div className="param__price">
                <h2>ПОДБОР ПО ПАРАМЕТРАМ</h2>

                <div className='cena'>
                    <span>Цена</span>
                    <span>₸</span>
                </div>

                <div className='price__inputs'>
                    <input placeholder="0" type="text" />
                    <span>-</span>
                    <input placeholder="100000" type="text" />
                </div>
            </div>

            <div className="param__producer">
                <h3>Производитель</h3>

                <div className="search__producer">
                    <input type="text" placeholder="Поиск..." />

                    <img src={homePage + "/img/search.svg"}  />
                </div>

                <div className="producers">
                    <label>
                        <input type="checkbox" value="one" /> Grifon (56)
                    </label>

                    <label>
                        <input type="checkbox" value="one" /> Boyscout (66)
                    </label>

                    <label>
                        <input type="checkbox" value="one" /> Paclan (166)
                    </label>

                    <label>
                        <input type="checkbox" value="one" /> Булгари Грин (21)
                    </label>
                </div>

                <div className='see__all'>
                    <a>
                        <span> Показать все</span>

                        <img src={homePage + "/img/select.svg"} />
                    </a>
                </div>
            </div>

            <div className="menu__items">
                {
                    typeCareItems.map((elem: any) =>
                        <a
                            key={elem}
                            onClick={() => typeCareItemClick(elem)}>
                            <h3
                                className={activeTypeCare == elem ?
                                    'selected__item' :
                                    ''}
                            >
                                {elem}
                            </h3>
                        </a>
                    )
                }
            </div>
        </>
    )
}


export default Params