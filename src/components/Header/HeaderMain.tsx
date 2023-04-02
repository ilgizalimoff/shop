import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/context';
import { homePage } from '../../constants/constants';

const HeaderMain = () => {
    const { basketItems } = useContext(BasketContext)

    const [result, setResult] = useState<any>()

    useEffect(() => {
        let sum = basketItems.reduce((acc: any, curval: any) =>
            acc + (Number(curval.price.replace(',', '.')) * curval.count), 0)

        setResult(sum.toFixed(2))
    }, [basketItems])

    return (
        <ul className="header__main">
            <li className="logo">
                <Link to="/catalog">
                    <img src={homePage + "/img/logo.png"} alt="" />
                </Link>
            </li>

            <li>
                <button className="cat">
                    Категории
                </button>
            </li>

            <li className="search">
                <input type="text" placeholder="Поиск..." />
                <img src={homePage + "/img/search.svg"} alt="" />
            </li>

            <li>
                <a className="tel">
                    <div>
                        <h3>+7 (777) 490-00-91</h3>

                        <span>время работы: 9:00-20:00</span>

                        <span>Заказать звонок</span>
                    </div>

                    <img src={homePage + '/img/girl.png'} />
                </a>
            </li>

            <li>
                <button className="prace">
                    Прайс-лист
                </button>
            </li>

            <li >
                <Link
                    to={'/basket'}
                    className="basket__btn"
                >
                    <div className="basket_count">
                        <span>
                            {basketItems.length}
                        </span>

                        <img src={homePage + "/img/basket.svg"} />
                    </div>

                    <div>
                        <span>Корзина</span>
                        <h3>{result} ₸ </h3>
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default HeaderMain