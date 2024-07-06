import styles from "./App.module.css"
import Buttons from "./Buttons"
import Input from "./Input";
import { useState } from "react";

function App(){
  
  let [displayValue,setVal] = useState("");
  const onButtonClick = (val) => {
    if(val==="C"){
      setVal("");
    }else if(val==="="){
      let result=eval(displayValue);
      setVal(result);
    }else{
      let UpdatedValue = displayValue + val ;
      setVal(UpdatedValue);
    }
  }
  return(
    <center>
      <h1>Calculator Using ReactJs</h1>
      <div className={styles.container}>
        <Input displayValue={displayValue}/>
        <Buttons onButtonClick={onButtonClick}/>
      </div>
    </center>
  )
}
export default App