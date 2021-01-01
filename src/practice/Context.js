import React,{ useContext } from 'react';
import {userContext} from '../App';

const Context = ()=>{
    const {name,setname} = useContext(userContext)
    return(
        <div>
            <h2>hello</h2>
            {name}
            <button onClick={()=>setname(prevState=>(prevState+1))}>click me</button>
        </div>
    )
}

export default Context;