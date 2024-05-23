import React, {useReducer, useState, useEffect} from 'react';
import './ReducerComponent.css';

const initialData = [{
    name: 'Selin',
    location: 'Chennai',
    age:20,
    mobile:9876543210
},
{
    name: 'Nikhil',
    location: 'Bangalore',
    age:20,
    mobile:1234567890
},
{
    name: 'Shifna',
    location: 'Nagercoil',
    age:20,
    mobile:1234567890
},
{
    name: 'Razena',
    location: 'Hydrabad',
    age:20,
    mobile:1234567890
},
{
    name: 'Benedit',
    location: 'Trivandrum',
    age:20,
    mobile:1234567890
}]
const userReducer = (initialData, action) => {
    let state = initialData;
    switch (action.type) {
      case 'addDetails':
        const data = [...state, action.payload]
        return data
        break;
        
      default:
          break;
    }
    return state;
  };

const ReducerComponent = () => {
    const [state, dispatch] = useReducer(userReducer, initialData);

    const handleAddRowChange=()=> {

        dispatch({type: "addDetails",payload: {
            name:"Jaspin",location:"Chennai",age:30,mobile:9876543210
         }})

   }
    return (
    <div>
        We are going learn Use Reducer today<br/>
        Display names<br/><br/>
        <table id="detailsView">
        <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Age</th>
            <th>Mobile No</th>
            <th>Actions</th>
            </tr>

        {
            state && state.map((item)=> {
                return(
                <>
                    <tr> 
                        <td>{item.name}</td>
                        <td>{item.location}</td>
                        <td>{item.age}</td>
                        <td>{item.mobile}</td>
                        <td><button className='submit'>Update Row</button><button className='submit'>Delete Row</button></td>
                    </tr>
                </>
                )
            })
        }
        <tr>
        <td colSpan={4}><button className='submit' onClick ={()=>handleAddRowChange()}>Add Row</button></td>
        </tr>
</table>
    </div>)
}

export default ReducerComponent;