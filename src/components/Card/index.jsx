import Link from 'next/link'
import styles from './styles.module.css'
import Button from '../Button'
import { FaRegEdit } from 'react-icons/fa'

export default function Card({ id, imagem, titulo, dataInicio, dataFim, local }) {

    return (
        <>
            <div>
                <div className={styles.card}>
                    <div>
                        <img className={styles.img} src={imagem} />
                        <div className={styles.subcontainer}>
                            <h2 className={styles.cardTitulo}>{titulo}</h2>
                            <br />
                            <div>Data de Início: {dataInicio}</div>
                            <br />
                            <div>Data de Fim: {dataFim}</div>
                            <br />
                            <div>Local: <br /> {local}</div>
                        </div>
                        <div className={styles.buttons}>
                        <Link href={`/eventos/${id}`}>
                            <Button className={styles.button}>Saiba mais</Button>
                        </Link>
                        <Link href={`/alterar/${id}`}>
                        <span  
                            className={styles.iconContainer}>
                            <FaRegEdit style={{width:'20px', height:'20px'}}/>
                        </span>
                        </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}