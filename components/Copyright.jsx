import styles from '../styles/footer.module.css';

export const Copyright = () =>
{
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.copyright}>
        &copy;{currentYear} STEMQuest Discovery
        </div>
    )
}

export default Copyright;