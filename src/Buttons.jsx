import styles from "./Buttons.module.css"
const Buttons = ({onButtonClick}) => {
    const buttons = [
        'C' , '1','2',
        '+' , '3','4',
        '-' , '5','6',
        '*' , '7','8',
        '/' , '9','0',
        '%' , '=','.'
      ];
    return (
        <div className={styles.Numbers}>
            {
                buttons.map(
                    (button) => (
                        <button key={button} className={styles.button} onClick={() => onButtonClick(button)}>{button}</button>
                    )
                )
            }
        </div>
    );

};
export default Buttons;