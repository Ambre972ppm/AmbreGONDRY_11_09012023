import whitelogo from '../../assets/logos/whitelogo.svg'
import '../../styles/Footer.css'

function Footer() {
    return (<div className="kaza-footer">
                <a className="kaza-footer-logo" href="#">
                    <img src={whitelogo} alt='Kaza' className='kaza-footer'/>
                </a>
                <div className="kaza-footer-quotes">
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>)
}

export default Footer                                                                                                                                                                            