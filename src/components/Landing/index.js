import React from 'react';
import { Link } from 'react-router-dom';
const Landing=()=>{
   return (
    <header>
    <main className="welcomePage">
        <div className="rightBox">
            <Link className="btn btn-primary btn-lg" to ="/Main">let's start</Link>
        </div>
     </main>
     </header>

   )
     


}
export default Landing;