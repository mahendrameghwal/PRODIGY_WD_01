import { Route , Routes } from "react-router-dom"
import Home from "./pages/home"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ErrorPage from "./pages/ErrorPage"

const App = () => {
  


  
  return (
  <Routes>
    
   
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/register" element={<RegisterPage/>}/>
  <Route path="/*" element={<ErrorPage/>}/>

  </Routes>
  


  )
}

export default App