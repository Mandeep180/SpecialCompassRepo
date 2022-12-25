import Navbar from "./Navbar"

import Home from "./pages/Home"


function App() {
   let component
   switch(window.location.pathname){

    case "/":
      component = <Home/>
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
