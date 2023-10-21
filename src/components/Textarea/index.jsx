import styles from './styles.module.css'
export default function Textarea({children, ...props}){
    return(
        <textarea className={styles.textarea} {...props}>{children}</textarea>
    )
}