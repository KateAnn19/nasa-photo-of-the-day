import React from "react";

const PictureTitle = props => {
    console.log("these are the props", props);
    return (
      <div className="" key="">
        <h2>{props.title}</h2>
      </div>
    );
  };
  
  export default PictureTitle;