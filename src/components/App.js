import React, {useEffect, useState} from 'react'
import '../styles/App.css';


const App = () => {

const [flag, setFlag] = useState(true)


const handleColor =()=> {
  setFlag(!flag)

}
  return (
    <div id="main">
      <p className={flag? "redColor" : "blueColor" } >Newton School</p>
      <button id="button" onClick={handleColor}>Change Style</button>
    </div>
  )
}


export default App;
