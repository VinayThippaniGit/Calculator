import styles from './Input.module.css';
export default function Input({displayValue}){

    return(
        <input type="text" className={styles.textBox} readOnly 
        value={displayValue}/>
    )
}