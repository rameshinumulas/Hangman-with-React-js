import React from 'react';
import {useHistory} from 'react-router-dom'

const {useRef,useState} = React;


const Refs=()=>{
    const history = useHistory()
    console.log(history,"hhh");
    const inputRefs = useRef()
    const [name,setName] = useState('')
    
    const Hello=(e)=>{
        e.preventDefault()
        console.log(inputRefs.current.tagName)
        setName(inputRefs.current.value)
    }
    return(
        <div>
            <h2>hello world</h2>
            <form>
            <input type="text"  ref={inputRefs} />
            <button  onClick={Hello}>svae</button>
            {name}           
            </form>
        </div>
    )
}



export default Refs;