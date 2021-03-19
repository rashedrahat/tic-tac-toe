import styles from "../../styles/Footer.module.css";

const Footer = () => (
    <footer className={styles.footer}>
        <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
        >
            Developed by{' '}
            <img src="https://avatars.githubusercontent.com/u/37572137?s=460&u=188e647719b5d069dac6c25650337c036ea6a306&v=4" alt="Vercel Logo" className={styles.logo} />
            &nbsp;with &hearts;
        </a>
    </footer>
);

export default Footer;
