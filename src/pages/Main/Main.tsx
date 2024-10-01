
import { pagesImage } from '../../assets';
import styles from './styles.module.css'

const Main = () => {
    return (
        <section className={styles.main}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Hello!</h1>
                <p className={styles.text}>
                    Меня зовут Павел!<br />
                    Я начинающий программист,<br />
                    увлечённый созданием инновационных решений<br />
                    и постоянным обучением в мире технологий.<br />
                    С недавнего времени я погрузился в программирование<br />
                    и стремлюсь развивать свои навыки, чтобы создавать удобные <br />
                    и эффективные приложения.
                </p>
            </div>
            <img className={styles.image} src={pagesImage.proger} alt="developer" />
        </section>
    );
};

export default Main;