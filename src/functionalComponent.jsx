import React, { useState, useEffect} from "react";

const SimpleComponent = (props) => {
const {changeName, name, details} = props;

//     //every time get executed
// useEffect(()=>{
//   alert("I am rendering evertime!")
// });

// // Component Did mount logic--> First time rendering
// useEffect(()=>{
//   setTimeout(() => {
//     alert("Hi, Welcome to React Training!")
//   }, 1000);
// }, []);

// // Component will receive props
// useEffect(()=>{
//   alert("Hi, Updating in Functional Component!")
// }, [name]);

// // Component will unmount 
// useEffect(()=>{
//   return(()=>{
//   //You can add your code for unmounting phase of component
//   alert("Functional Component Removed ")
//    })
//   }, []);

  

  console.log("changeName--->", name);
  return (
    <>
      <h1>Hello, {name}</h1>
      <h4>Details </h4>
      <p>Mob No : {details.mobNo}</p>
      <p>Address : {details.address}</p>

      <button
        onClick={changeName}
        style={{
          padding: "1rem",
          color: "white",
          backgroundColor: "blueviolet",
        }}
      >
        Change name
      </button>
    </>
  );
};
export default SimpleComponent;
