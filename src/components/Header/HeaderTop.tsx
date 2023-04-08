import { Link } from "react-router-dom";
import { homePage } from "../../constants/constants";

export default function HeaderTop() {
    return (
        <div className="header__top">
            <div className="header__top-left">
                <a className="adress">
                    <img src={homePage + "/img/map.svg"} alt="" />

                    <div>
                        <h3>
                            г. Кокчетав, ул. Ж. Ташенова 129Б
                        </h3>

                        <span>
                            (Рынок Восточный)
                        </span>
                    </div>
                </a>

                <a className="mail">
                    <img src={homePage + "/img/mail.svg"} />

                    <div>
                        <h3>opt.sultan@mail.ru </h3>
                        <span>На связи в любое время</span>
                    </div>
                </a>
            </div>

            <ul className="header__menu">
                <li><a href="">О компании</a></li>
                <li><a href="">Доставка и оплата</a></li>
                <li><a href="">Возврат</a></li>
                <li><a href="">Контакты</a></li>
                <li className="admin">
                    <Link
                        data-testid='admin'
                        to='/admin'>
                        Админ-панель
                    </Link>
                </li>
            </ul>
        </div>
    )
}
