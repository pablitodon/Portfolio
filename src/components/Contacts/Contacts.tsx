import styles from './styles.module.css';
import { pagesImage, socilalLinksIcons } from '../../assets';

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.textContainer}>
                <h1 className={styles.header}>Контакты:</h1>
                <ul>
                    <li className={styles.link}>
                        <img src={socilalLinksIcons.mail} alt="mail" />
                        <a target='_blank' rel="noopener noreferrer" className={styles.link} href="mailto:pavelkazakevich040196@gmail.com">pavelkazakevich040196@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src={socilalLinksIcons.vkontakte} alt="vk" />
                        <a target='_blank' rel="noopener noreferrer" className={styles.link} href="https://vk.com/kazakevich_pavel">ВКонтакте</a>
                    </li>
                    <li className={styles.link}>
                        <img src={socilalLinksIcons.telegram} alt="tg" />
                        <a target='_blank' rel="noopener noreferrer" className={styles.link} href="https://t.me/donpabloooo">+375297056356</a>
                    </li>
                    <li className={styles.link}>
                        <img src={socilalLinksIcons.whatsapp} alt="whatsapp" />
                        <a className={styles.link} href="#">+375297056356</a>
                    </li>
                </ul>
            </div>
            <img className={styles.image} src={pagesImage.coding} alt="coding" />
        </section>
    );
};

export default Contacts;