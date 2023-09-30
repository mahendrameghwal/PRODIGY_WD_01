import { Route , Routes } from "react-router-dom"
import Home from "./pages/home"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

const App = () => {

  return (
  <Routes>
    
   
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/register" element={<RegisterPage/>}/>
  </Routes>
  


  )
}

export default App