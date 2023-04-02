import HeaderMain from './HeaderMain'
import HeaderTop from './HeaderTop'

const Header = () => {
    return (
        <header>
            <div className="container">
                <HeaderTop />
            </div>

            <div className="line"></div>

            <div className="container">
                <HeaderMain />
            </div>

            <div className="line"></div>
        </header>
    )
}

export default Header