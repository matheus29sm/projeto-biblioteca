
import logo from '../../img/logo.png'
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="B"/>
            <ul>
                <li>Inicio</li>
                <li>Contato</li> 
            </ul>
            
        </nav>
    )
}

export default Navbar;