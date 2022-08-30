import {Routes,Route} from "react-router-dom"
import Login from "./Components/Login"
import Feed from "./Components/Feed"
import Navbar from "./Components/Navbar"
import { Signup } from "./Components/Signup"
import Feed2 from "./Components/Feed2/Feed2"
function App() {
 

  return (
    <div>
    
       <Routes>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/feed" element={<Feed2/>}></Route>
        <Route path="/" element={<Login/>}></Route>
        
      </Routes> 
{/* <Feed2/> */}
    </div>
  )
}


export default App
