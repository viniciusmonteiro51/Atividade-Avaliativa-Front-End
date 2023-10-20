import styles from './styles.module.css'
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
export default function EventosHome() {

    const [evento, setEvento] = useState({})
    const router = useRouter()

    useEffect(() => {

        const id = router.query.id
        if (id) {
            axios.get(`http://localhost:3000/eventos/${id}`)
                .then(resultado => setEvento(resultado.data))
        }
    }, [])


    return (
        <>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <img
                        style=
                        {{ borderRadius: '10px', width: '1000px' }}
                        src={evento.imagem} />

                    <div className={styles.subcontainer}>
                        <h1>{evento.titulo}</h1>
                        <p>Descrição: <br />
                            {evento.descricao}</p>
                        <br />
                        <p>Data de Inicio: {evento.dataInicio} | <br /> Data de Fim:{evento.dataFim}</p>
                    </div>
                </div>
            </div>

        </>
    )
}