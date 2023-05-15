import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Form from "./components/Form"
import Service from "./components/Service"


const App=()=>{
  return (
    <>
    <div className='bg-gray-800 min-h-screen'>
      <Router>
        <Nav/>
        
        <Routes>

          <Route exact path='/' Component={Home}/>
          <Route path='/Contact' Component={Contact}/>
          <Route path='/Form' Component={Form}/>
          <Route path='/Service' Component={Service}/>

        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
