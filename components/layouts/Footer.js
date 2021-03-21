import styles from "../../styles/Footer.module.css";

const Footer = () => (
    <footer className={styles.footer}>
        Developed by{' '}
        <img src="https://avatars.githubusercontent.com/u/37572137?s=460&u=188e647719b5d069dac6c25650337c036ea6a306&v=4"
             alt="Developer logo" className={styles.logo}/>
        &nbsp;with &hearts;
    </footer>
);

export default Footer;
