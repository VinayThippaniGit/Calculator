import styles from "./App.module.css"
import Buttons from "./Buttons"

function App(){
  
  const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%','=','C'];
  return(
    <center>
      <h1>Calculator Designed Using ReactJs</h1>
      <div className={styles.container}>
        <input type="text" className={styles.textBox}/>
        <Buttons buttonItems={buttons}/>
      </div>
    </center>
  )
}
export default App