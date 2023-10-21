import axios from "axios"
import { useEffect ,useState } from "react"
import Card from "../Card"
import styles from './styles.module.css'

export default function ListCard(){


  const [evento, SetEvento] = useState([])
  const [eventos, setEventos] = useState([])


  function handleCardClick(data) {
    console.log("Dados do Card:", data);i
  }
  useEffect(() =>{
    axios.get('http://localhost:3000/eventos')
      .then(resultado => setEventos(resultado.data))
  }, [])

  function formatarData(data) {
    const[ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }
  
    return(
        <>  
   
            <div className={styles.listCard}>
                  {eventos.map(e =>(
                    <Card
                    imagem={e.imagem}
                    id={e.id}
                    titulo={e.titulo}
                    descricao={e.descricao}
                    dataInicio={formatarData(e.dataInicio)}
                    dataFim={formatarData(e.dataFim)} 
                    local={e.local}
                    onClick={() => handleCardClick(e)} 
                    />
                  
                  ))
                
                }
            </div>
        </>
    )
}