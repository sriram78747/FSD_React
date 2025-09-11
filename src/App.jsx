import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import CardComponent from './CardComponent';
// import CardComponent from './FunctionComponent.jsx'
// import MyImage from './assets/react.svg';
import './App.css'
import "./component1.jsx"
import "./component2.jsx"

function App() {
  


var x = true;

return(
  <>
    {x == true ? <component1/> : <component2/>}
  </>
)


    // return(
    //   <div className="parent">
    //     {
    //       MyList.map(ele=>{
    //         return <CardComponent Data = {ele}/>
    //       })
    //     }
    //   </div>
    // )
}

export default App