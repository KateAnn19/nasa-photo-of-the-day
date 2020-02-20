import React from "react";


const Picture = props => {
    console.log("these are the props", props);
    return (
      <div className="" key="">
          <img src={props.imgSrc} alt="random from NASA"/>
     </div>
    );
  };
  
  export default Picture;