import styles from './styles.module.css'

export default function Cabecalho({}){
    return(
        <>
        <header className={styles.header}>
            <h1>Portal de Eventos</h1>
            <div className={styles.a}>
            <a className={styles.hover} href='/eventos'>Eventos</a>
            <a className={styles.hover} href='/'>Inicio</a>
            <a className={styles.hover} href='/saibamais'>Saiba mais</a>
            </div>
        </header>
        </>
    )
}