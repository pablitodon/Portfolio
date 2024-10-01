import styles from './styles.module.css'


const Works = () => {
    return (
        <section className={styles.about}>
            <div>
                <h1 className={styles.header}>Мои работы:</h1>
                <ul>
                    <li className={styles.workItem}>
                        <h3 className={styles.title}>Youtube-SPA:</h3>
                        <div className={styles.links}>
                            <a
                                className={styles.link}
                                target="_blank"
                                href="https://github.com/pablitodon/YOUTUBE_SPA"
                            >
                                GitHub
                            </a>
                            <a
                                className={styles.link}
                                target="_blank"
                                href=""
                            >
                                Vercel
                            </a>
                        </div>
                    </li>
                    <li className={styles.workItem}>
                        <h3 className={styles.title}>News-React:</h3>
                        <div className={styles.links}>
                            <a
                                className={styles.link}
                                target="_blank"
                                href="https://github.com/pablitodon/news-react"
                            >GitHub
                            </a>
                            <a
                                className={styles.link}
                                href="https://news-react-azure.vercel.app/"
                                target="_blank"
                            >
                                Vercel
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Works;