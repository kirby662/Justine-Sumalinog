import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import About from "./about";

export default function App(){ 
  return( 
    <BrowserRouter> 
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
    </Routes>
    </BrowserRouter>
  )
}