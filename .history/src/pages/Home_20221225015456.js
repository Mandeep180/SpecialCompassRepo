import React from "react";
import {Navigate} from "react-router-dom"

// 
function Home(){
    return(
        <div>
            
            HealthCare Service Provider{""}<button onClick ={()=>{Navigate("/")}} >Home </button>
        </div>
    )
}

// function Home(){
//     const navigate = useNavigate()
    
//     return(
//         <div>
//           Register as a HealthCare Service Provider{""}
//            <button 
//            onClick={()=>{
//             navigate("/")
//            }}>Go to the home page</button>

//           </div> 
          
        

//     );
// }
export default Home;

