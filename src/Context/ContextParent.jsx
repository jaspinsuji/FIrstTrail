
import React, { useState } from 'react';
import ContextChild from './ContextChild';

export const NameContext = React.createContext();

const ContextParent =()=> {
    const [name, setName] = useState({name: "Suji",address: "xxx"});
    return(
    <div>Context Parent Component<br/>
        <NameContext.Provider value={name}>
            <ContextChild/>
        </NameContext.Provider>
    </div>
    )
}
export default ContextParent;