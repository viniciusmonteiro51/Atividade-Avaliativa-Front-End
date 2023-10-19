import styles from './styles.module.css'

export default function Cabecalho({}){
    return(
        <>
        <header className={styles.header}>
            <div className={styles.cabecalho}>
            <h1>Portal</h1>
            <h2>d&</h2>
            <h3>Eventos</h3>
            </div>

            <div className={styles.a}>
            <a className={styles.hover} href='/'>Inicio</a>
            <a className={styles.hover} href='/saibamais'>Saiba mais</a>
            </div>
        </header>
        </>
    )
}