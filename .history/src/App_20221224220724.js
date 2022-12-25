import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import Logo from './Logo.png';
<div className="App">
     <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        </header>
  </div>
function App() {
   let component
   switch(window.location.pathname){

    case "/":
      component = <Home/>
      break
      case "/pricing":
        component= <Pricing/>
      break

  }
  
  return(
    
    <>
   <Navbar/>
   <div className= "container">
   {component}
   </div>
   
    </>
    
  )
  
  
}
  
  
    


export default App;
