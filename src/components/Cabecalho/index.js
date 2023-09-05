import styles from './Cabecalho.module.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import CabecalhoLink from 'components/CabecalhoLink';

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to='./'>
                <img src={logo} alt='Logo do Cinetag'/>
            </Link>
            <nav>
                <CabecalhoLink url='./'>
                    Home
                </CabecalhoLink>
                <CabecalhoLink url='./Favoritos'>
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;