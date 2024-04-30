import React, { useState } from "react";

const SimpleComponent = () => {
  const [name, setName] = useState("Jaspin");
  const [details, setDetails] = useState({
    mobNo: "3456789",
    address: "dfghjk",
  });

  const changeName = () => {
    setName("S2RB");
    setDetails({ mobNo: "3456789", address: "xxxxxxxxxxx" });
  };

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
