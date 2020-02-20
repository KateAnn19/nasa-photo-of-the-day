import React from "react";

const Explanation = props => {
    console.log("these are the props", props);
    return (
      <div className="" key="">
       
        <p>{props.description}</p>
        
      </div>
    );
  };
  
  export default Explanation;