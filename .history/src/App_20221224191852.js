import Navbar from "./Navbar"
import Pricing from "./pages/Pricing"
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
   {component}
    </>
  )
  
  
}
  
  
    


export default App;
