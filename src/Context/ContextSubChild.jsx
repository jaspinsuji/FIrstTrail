import React, {useContext, useState} from 'react';
import {NameContext} from './ContextParent';

const ContextSubChild =()=> {
    const[enableData,setEnableData]=useState(false);
    const contextData = React.useContext(NameContext);
    console.log('name---->', contextData);
    const populateData=() => (
        <div>
        <h5>Name: {contextData.name}</h5>
        <h5>Address: {contextData.address}</h5>
        </div>
       )
       const handleClick=()=>(setEnableData(true))
    return(
    <div>
        Context SubChild Component
        <hr/>
        <h3>Click the button to view the code</h3>
        <button onClick={handleClick} >View Details</button>  
        {/* <h5>Name:  {contextData.name}</h5>
        <h5>Address: {contextData.address}</h5> */}
        {
            enableData&&populateData()
        }

    </div>)

}
export default ContextSubChild;