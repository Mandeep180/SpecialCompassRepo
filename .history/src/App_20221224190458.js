import Navbar from "./Navbar"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = <Home/>
      break
      case "/pricing":
      Component = <Pricing/>

  }
  return (
    <>
  <Navbar/>

  <Component/>
  </>
  )
  
  
    
}

export default App;
