import { BrowserRouter as Router, Route } from "react-router-dom"
import Nav from "./components/Nav"

const App=()=>{
  return (
    <>
    <div className='bg-gray-800 min-h-screen'>
      <Nav/>
    </div>
    </>
  )
}

export default App
