import styles from './header.module.css'
import icon from '../../assets/logo.svg'


function Header() {
    return (
        <header className={styles.wrapper}>
            <picture>
                <img src={icon} alt=""/>
            </picture>
        </header>
    );
}

export default Header;