import Cabecalho from '@/components/Cabecalho'
import ListCard from '@/components/ListCard'
import Rodape from '@/components/Rodape'
import styles from './styles.module.css'
import Link from 'next/link'
import { useState } from 'react'
export default function Cards() {

  const [evento, setEvento] = useState()
  return (
    <>
    <div className={styles.container}>
      <Link href='/cadastro'>
        <button className={styles.button}>Cadastrar</button>
      </Link>
    </div>
    
    <ListCard/>
    </>
  )
}
