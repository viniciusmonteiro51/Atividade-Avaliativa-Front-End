import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'
import styles from '@/styles/home.module.css'
export default function Home() {
  return (
    <>
    <Cabecalho/>
    <div className={styles.container}>
      <div className={styles.subcontainer}> 
        <h1>Viaje no tempo e explore os eventos históricos  mais impactantes do mundo em nossa plataforma virtual. Uma experiência imersiva que conecta passado e presente de forma envolvente.</h1> 
      </div>
    
    </div>
    <Rodape/>
    </>
  )
}

