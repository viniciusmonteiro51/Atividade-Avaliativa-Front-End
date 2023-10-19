import styles from './styles.module.css'
import { FaBookJournalWhills } from 'react-icons/fa6'
export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.rod}>
                    <FaBookJournalWhills
                        style={{
                            color: 'white',
                            width: '64px',
                            height: '64px',
                            alignItems: 'center',
                        }} />
                    <div>
                        <h2>IFRO - Instituto Federal de Rondônia</h2>
                        <h3>Av. Lauro Sodré, 6500 - Censipam - Aeroporto, Porto Velho - RO, 76803-260
                            Fone/Fax: (69) 2182-9600</h3>
                    </div>
                </div>
                <h3>&copy; 2023 Vinicius. Todos os direitos reservados.</h3>
            </div>
        </footer>
    )
}