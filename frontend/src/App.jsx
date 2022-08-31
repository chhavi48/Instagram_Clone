import {Routes,Route} from "react-router-dom"
import Login from "./Components/Login"
// import Feed from "./Components/Feed"
// import Navbar from "./Components/Navbar"
// import { Signup } from "./Components/Signup"
import Feed2 from "./Components/Feed2/Feed2"
import SignUp2 from "./Components/Feed2/SignUp2"
import LogIn2 from "./Components/Feed2/Login2"
function App() {
 

  return (
    <div>
<Routes>
      <Route path="/signup" element={<SignUp2/>}/>
      <Route path="/feed" element={<Feed2/>}/>
        <Route path="/" element={<Login/>}/>
          
      </Routes> 
{/* <Feed2/> */}
    </div>
  )
}


export default App
