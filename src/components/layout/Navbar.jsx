
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="B"/>
            <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/contato'>Contato</Link></li> 
            </ul>
            
        </nav>
    )
}

export default Navbar;