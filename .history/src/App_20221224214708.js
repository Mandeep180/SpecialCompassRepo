import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
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
  <div className="App">
     <header className="App-header">
        <img src={SC_Logo_icon} className="App-logo" alt="logo" />
        </header>
  </div>
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
