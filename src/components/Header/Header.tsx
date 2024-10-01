import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css'




const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            <ul className={styles.headLinks}>
                <Link className={styles.link} to='/about' >ABOUT ME</Link>
                <Link className={styles.link} to='/myWorks'>MY WORKS</Link>
                <Link className={styles.link} to='/contacts'>CONTACTS</Link>
            </ul>
            <button onClick={() => navigate('/')} className={styles.btnHome}>
                I'm Pavel Kazakevich
            </button>
        </header>
    );
};

export default Header;