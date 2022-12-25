import Navbar from "./Navbar"
import Home from "./pages/Home"
function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = Home
      break

  }
  return (
    <>
  <Navbar/>
  <Component/>
  </>
  )
  
  
    
}

export default App;
