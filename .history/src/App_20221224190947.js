import Navbar from "./Navbar"

function App() {
  let Component
  switch (window.location.pathname){
    case "/Home":
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
