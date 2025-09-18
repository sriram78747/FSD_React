import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import CardComponent from './CardComponent';
// import CardComponent from './FunctionComponent.jsx'
// import MyImage from './assets/react.svg';
import './App.css'
import C1 from "./Component1.jsx";
import C2 from "./Component2.jsx";

function App() {
  const [X,setX] = useState(0);

  const change = ()=>{
    X = setX(!X)
  }
return(

  <>
    <button onClick={change}>click</button>
    {X == true ? <C1/> : <C2/>}
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