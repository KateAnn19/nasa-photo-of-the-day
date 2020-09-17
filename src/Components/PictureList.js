import React, { useState, useEffect } from "react";
import axios from "axios";
import PictureCard from "./PictureHolder";

//-------------------------------------------------------
//Keep Just what's above to make it work 
//---------------------------------------------------------


function PictureList() {
  const [pictures, setPictures] = useState([]);
  

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=Gpzn1C1y6JjbqH8M61qJib3d8QRHVzOXgYA83O3Q`)
      
      .then(response => {
          console.log(response)
        console.log("This is response.data", response.data);
        // console.log("This is response.data,date", response.data.date);
        // console.log("This is response.data.title", response.data.title);
        // console.log("This is response.data.explanation", response.data.explanation);
        // console.log("This is response.data.url", response.data.url);
        setPictures(response.data);
        console.log("This is set Pictures function", setPictures(response.data))
        
      })
      .catch(error => [console.log("The data was not retured", error)]);
  }, []);
  return (
    <div className="NasaCall">

        <PictureCard 
            title={pictures.title}
            description={pictures.explanation}
            imgSrc={pictures.url}
            date={pictures.date}
            //key={pictures.date} info={pictures}
          />
    </div>
  );
}

export default PictureList


//this is how I access different pictures
// `https://api.nasa.gov/planetary/apod?api_key=Gpzn1C1y6JjbqH8M61qJib3d8QRHVzOXgYA83O3Q&date=2008-05-29`



//----------------------------------------------------------
//This plus what's above dotted line makes pictures show up
//-----------------------------------------------------------

// function PictureList() {
//     const [pictures, setPictures] = useState([]);
//     console.log(useState([]));
//     console.log("This is pictures:", pictures);
  
//     useEffect(() => {
//       axios
//         .get(`https://api.nasa.gov/planetary/apod?api_key=Gpzn1C1y6JjbqH8M61qJib3d8QRHVzOXgYA83O3Q`)
//         .then(response => {
//           // console.log("This is response.data", response.data);
//           // console.log("This is response.data,date", response.data.date);
//           // console.log("This is response.data.title", response.data.title);
//           // console.log("This is response.data.explanation", response.data.explanation);
//           // console.log("This is response.data.url", response.data.url);
//           setPictures(response.data);
          
//         })
//         .catch(error => [console.log("The data was not retured", error)]);
//     }, []);
//     return (
//       <div className="NasaCall">
  
//           <PictureCard 
//               title={pictures.title}
//               description={pictures.explanation}
//               imgSrc={pictures.url}
//               date={pictures.date}
//               //key={pictures.date} info={pictures}
//             />
//       </div>
//     );
//   }
  
//   export default PictureList