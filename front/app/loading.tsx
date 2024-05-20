import styles from "./styles/loading.module.scss"

export default function Loading() {
    return (
        <div className={styles.loading_page}>
            <div className={styles.loader}></div>
        </div>
    )
}
