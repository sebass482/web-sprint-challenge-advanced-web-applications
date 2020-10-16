import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import {axiosWithAuth} from './axiosAuth';
const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then((res) => {
        setColorList(res.data)
        // console.log(res)
        // console.log('Getting Colors')
      })
      .catch((err)=>{
        console.log(err)
      })
  }, [])
  
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
