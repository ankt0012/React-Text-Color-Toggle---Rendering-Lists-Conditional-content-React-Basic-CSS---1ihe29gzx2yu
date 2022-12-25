import React, {useEffect, useState} from 'react'
import '../styles/App.css';


const App = () => {
//code here 
const [color, setColor] = useState("redColor")
const [count, setCount] = useState(0)


const handleColor =()=> {
  setCount(count + 1)
  if(count %2 ==0 ){
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
