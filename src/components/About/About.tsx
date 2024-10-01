import { certificateImage } from '../../assets';
import styles from './styles.module.css'



const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.containerText}>
                <strong>🎓Образование:</strong>
                <p>Redev Courses.</p>
                <strong>🌱 Навыки:</strong>
                <ul className={styles.list}>
                    <li>Основы HTML, CSS и JavaScript</li>
                    <li>Основы работы с Git и GitHub</li>
                    <li>Знакомство с фреймворком : React</li>
                </ul>
                <div>🎮 Знание Redux и RTK (Redux Toolkit, RTK Query & Mutation) для управления состоянием/выполнения запросов</div>
            </div>
            <img className={styles.image} src={certificateImage.certificate} alt="certificate" />
        </section>
    );
};

export default About;