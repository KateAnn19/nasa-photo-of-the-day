import React from "react";
//--------------------------------------------------------
//Keep Just What's Above for it to work
//----------------------------------------------------------

//---------------------------------------------------------
//New Changes Start Here
//----------------------------------------------------------
import Picture from "./url.js";
import Explanation from  "./explanation.js"
import PictureTitle from "./title.js"
import Date from "./date.js"


const PictureCard = props => {
  console.log("these are the props", props);
  return (
    <div className="" key="">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div>
        <img src={props.imgSrc} alt="random from NASA"/>
      </div>
      <div>
        {/* <Date
        date={props.users.username} */}
        
      />
      </div>
    </div>
  );
};

export default PictureCard;





//----------------------------------------------------------
//this works below
//----------------------------------------------------------
// const PictureCard = props => {
//   console.log("these are the props", props);
//   return (
//     <div className="" key="">
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//       <div>
//         <img src={props.imgSrc} alt="random from NASA"/>
//       </div>
//       <div>
//         <h3>{props.date}</h3>
//       </div>
//     </div>
//   );
// };

//export default PictureCard;