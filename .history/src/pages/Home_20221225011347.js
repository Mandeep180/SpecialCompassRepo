import React from "react";
import {Navigate} from "react-router-dom"
function Home(){
    return(
        <div>
            <Navigate/>
            <button className="register-btn">Register as a HealthCare Service Provider</button>
        </div>

    )
}
export default Home;

