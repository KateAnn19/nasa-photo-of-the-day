import React from "react";
import {StyledDate} from "./Styled";

const Date = props => {
    console.log("these are the props", props);
    return (
      <div>
        <StyledDate>{props.date}</StyledDate>
      </div>
    );
  };
  
  export default Date;