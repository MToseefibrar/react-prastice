

import React from "react";
import {Link} from "react-router-dom"

function Home() {

    const apple = () => {

        alert("Hi Apple")
    }

    return (
        <div>
         <h1>Home</h1>
         <Link to="/">Home</Link>

         <button onClick={apple}>Click ME</button>
        </div>
    )
}
export default Home;