import Link from 'next/link'
import styles from './styles.module.css'
import Button from '../Button'
export default function Card({ id, imagem, titulo, descricao, dataInicio, dataFim, local }) {

    return (
        <>
            <div>
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src={imagem} />
                        <h2 className={styles.cardTitulo}>{titulo}</h2>
                        <div className={styles.subcontainer}>Descrição: {descricao}</div>
                        <br />
                        <div>Data de Início: {dataInicio}</div>
                        <br />
                        <div>Data de Fim: {dataFim}</div>
                        <br />
                        <div>Local: <br /> {local}</div>
                    <Link href={`/eventos/${id}`}>
                       <Button className={styles.button}>Saiba mais</Button>
                    </Link>
                     
                    </div>
                </div>
            </div>
        </>
    )
}