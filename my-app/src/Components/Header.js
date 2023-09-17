import React  from "react";

function Header({step, currentIndex}){
   const denominator = 4; // Because you have 4 options: 0,1,2,3
   let displayStep
   if(currentIndex!== undefined){
    displayStep = currentIndex;
   }
   else
   {
    displayStep = step;
   }
   return(
       <div className="header">
           <h1>Step {displayStep}/{denominator}</h1>
       </div>
   );
}

export default Header;
