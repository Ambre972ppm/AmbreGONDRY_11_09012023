import logo from '../../assets/logos/logo.png'
import '../../styles/Header.css'

function Header() {
    return (<div className="kaza-header">
                <a className="kaza-header-logo" href="#">
                    <img src={logo} alt='Kaza' className='kaza-header'/>
                </a>
                <div className="kaza-header-links">
                    <a href="#">Accueil</a>
                    <a href="#">A propos</a>
                </div>
            </div>)
}

export default Header