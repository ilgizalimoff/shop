export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer__wrapper">
                    <div className="company__info">
                        <div className="footer__logo">
                            <img src="../../../img/footer-logo.png" />
                        </div>

                        <div className="footer__description">
                            <p>
                                Компания «Султан» — снабжаем розничные магазины товарами
                                "под ключ" в Кокчетаве и Акмолинской области
                            </p>
                        </div>

                        <div className="follow__title">
                            Подпишись на скидки и акции
                        </div>

                        <div className='email__input'>
                            <input placeholder='Введите ваш E-mail' type="text" />

                            <img src="../../../img/email-arrow.svg" alt="" />
                        </div>
                    </div>

                    <ul className='footer__menu'>
                        <li>
                            <h3>Меню сайта:</h3>

                            <ul className='footer__menu-items'>
                                <li>О компании</li>
                                <li>Доставка и оплата</li>
                                <li>Возврат</li>
                                <li>Контакты</li>
                            </ul>
                        </li>

                        <li>
                            <h3>Категории:</h3>

                            <ul className='footer__menu-items'>
                                <li>Бытовая химия</li>
                                <li>Косметика и гигиена</li>
                                <li>Товары для дома</li>
                                <li>Товары для детей и мам</li>
                                <li>Посуда</li>
                            </ul>
                        </li>

                        <li >
                            <h3>Скачать прайс-лист:</h3>

                            <button className="prace">Прайс-лист</button>

                            <div className='connection__title'>
                                Связь в мессенджерах:
                            </div>

                            <div className="connection">
                                <img src="../../../img/whatsapp.png" alt="" />
                                <img src="../../../img/telegram.png" alt="" />
                            </div>
                        </li>

                        <li>
                            <h3>Контакты:</h3>

                            <div className="tel__number">
                                +7 (777) 490-00-91
                            </div>

                            <div className="work__time">
                                время работы: 9:00-20:00
                            </div>

                            <div className="req__call">
                                Заказать звонок
                            </div>

                            <div className="footer__email">
                                opt.sultan@mail.ru
                            </div>

                            <div className="footer__email-desc">
                                На связи в любое время
                            </div>

                            <div className="bank__cards">
                                <img src="../../../img/visa.png" />
                                <img src="../../../img/mastercard.png" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
