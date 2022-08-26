import {Routes,Route} from "react-router-dom"
import Login from "./Components/Login"
import Feed from "./Components/Feed"
import Navbar from "./Components/Navbar"
import { Signup } from "./Components/Signup"
function App() {
 

  return (
    <div>
    
      <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/feed" element={<Feed/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        
      </Routes>

    </div>
  )
}


export default App
