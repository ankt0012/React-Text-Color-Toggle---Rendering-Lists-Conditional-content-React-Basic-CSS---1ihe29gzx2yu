import React, {useEffect, useState} from 'react'
import '../styles/App.css';


const App = () => {
//code here 
const [color, setColor] = useState("redColor")
const [flag, setFlag] = useState(false)


const handleColor =()=> {
  setFlag(!flag)
  if (flag === true) {
    setColor("blueColor");
  }else{
    setColor("redColor");
  }
}
  return (
    <div id="main">
      <p className={color} >Newton School</p>
      <button id='button' onClick={handleColor}>Change Style</button>
    </div>
  )
}


export default App;
