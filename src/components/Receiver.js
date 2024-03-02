import React,{useContext} from 'react';
import { UserContext } from '../context/context';
const Receiver=(user)=>{
    let newuserInfo=useContext(UserContext)
    return(
        <React.Fragment>
            <h1 className='text-success'>Receive Data using Context</h1>
            <h2 className='text-warning'>{JSON.stringify(newuserInfo)}</h2>
            <h3>======================================================================</h3>
        </React.Fragment>
    )
}
export default Receiver;

