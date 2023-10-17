import Link from 'next/link'
import styles from './styles.module.css'
import Button from '../Button'
export default function Card({id, imagem, titulo, descricao, dataInicio, dataFim, local }) {

    return (
        <>
            <Link alt='Saiba mais' href={`/eventos/${id}`}>
                <div className={styles.card}>               
                    <div>
                    <h2 className={styles.cardTitulo}>{titulo}</h2>
                    <img className={styles.img} src={imagem}/>
                    
                    <div className={styles.subcontainer}>Descrição: {descricao}</div>
                    <br/>
                    <div>Data de Início: {dataInicio}</div>
                    <br/>
                    <div>Data de Fim: {dataFim}</div>
                    <br/>
                    <div>Local: <br/> {local}</div>
                    </div>
        
                </div>
            </Link>
        </>
    )
}