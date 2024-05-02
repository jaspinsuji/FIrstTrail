import React, {useState} from "react";
import SimpleComponent from "./functionalComponent";
const FunctionalParent = ()=>{
    
    const [name, setName] = useState("Jaspin");
    const [details, setDetails] = useState({
      mobNo: "3456789",
      address: "dfghjk",
    });

    const changeName = () => {
        setName("S2RB");
        setDetails({ mobNo: "3456789", address: "xxxxxxxxxxx" });
      };

    return(<>
    <h3> Hi, I am parent Component</h3>
<SimpleComponent changeName={changeName} name={name} details={details}/>

    </>)
}
export default FunctionalParent;