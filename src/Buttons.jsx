import styles from "./Buttons.module.css"
const Buttons = (props) => {
    let buttonss=props.buttonItems;
    return (
        <div>
            {
                buttonss.map(
                    (button) => (
                        <button className={styles.button}>{button}</button>
                    )
                )
            }
        </div>
    )

}
export default Buttons