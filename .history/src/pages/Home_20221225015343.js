import React from "react";
import {useNavigate} from "react-router-dom"

// 
function Home(){
    return(
        <div>
            HealthCare Service Provider{""}<button onClick ={()=>{navigate("/")}} >Home </button>
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

