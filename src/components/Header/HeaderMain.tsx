import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { BasketContext } from '../../context/context';
import { homePage } from '../../constants/constants';
import { basketItemsSum } from '../../utils/utils';

const HeaderMain = () => {
    const { basketItems } = useContext(BasketContext)

    const [result, setResult] = useState(0)

    useEffect(() => {
        const sum: number = basketItemsSum(basketItems)
        setResult(Math.floor(sum * 100) / 100)
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
                    data-testid="basket-link"
                    to={'/basket'}
                    className="basket__btn"
                >
                    <div className="basket_count">
                        <span>
                            {basketItems?.length}
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