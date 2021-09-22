import React from 'react';


import './Navbar.css'

export default function Navbar() {
    var classs="norm";
    /*function myFunction(x) {
        if ( classs==="norm" ? classs="change":classs="norm");
        console.log(classs);
        console.log(classs);

        
        
      }*/
      function myfunction2(){
          const x = document.getElementById("cont");
          x.classList.toggle("change");
          const y= document.getElementById("snav");
          y.classList.toggle("none");
          const z= document.getElementById("sideB");
          z.classList.toggle("change");

      }
    
   

  
    return (
        
        <div className="navbar">
            <h2>git users</h2>
            
 

            <div className="navbarR">
             <button className="navButton">home</button>
             <button className="navButton">profiles</button>
             <button className="navButton">gallery</button>
           
            </div>
           
             <div className="sideNav" id="snav">
           <div className="container" id="cont" onClick={myfunction2}>
                
               
                
                <div className= {classs + " bar1"}></div>
                <div className={classs + " bar2"}></div>
                <div className={classs + " bar3"}></div>

            </div>
            <div className="sideButt" id="sideB">
            <button className="navButton">home</button>
             <button className="navButton">profiles</button>
             <button className="navButton">gallery</button>
             </div>
           
            </div>
           {/* <div className="sidebar">
            <div className="container" id="cont" onClick={myfunction2}>
                
               
                {console.log(classs)}
                <div className= {classs + " bar1"}></div>
                <div className={classs + " bar2"}></div>
                <div className={classs + " bar3"}></div>
               
            </div>
            <div className="sidebar buttons">
            <button className="snavButton">home</button>
             <button className="snavButton">profiles</button>
             <button className="snavButton">gallery</button>
           
</div>

            </div>  */}

        </div>
    )
}
