import React,{useState} from 'react';
const Child=({sendDataToParent})=>{
    let [childData,setChildData]= useState([{
        name:"Manu",
        desg:"SW Engineer",
        age:30
    }])
    let[dataToSend,setDataToSend]=useState("")
    const [disabled,setDisabled]=useState(true)

    const sendData=(e)=>{
        
        sendDataToParent(dataToSend)
        setDataToSend("")
        setDisabled(true);
    }
    const handleChange = (e) => {
        setDataToSend(e.target.value);
        setDisabled(e.target.value === '');
    };
    const submitData=(e)=>{
        e.preventDefault()
    }
    return(
        <React.Fragment>
          <h1 className='text-success'>Child Comp</h1>
          {
            childData.map((id,index)=>{
                return(
                    <div key={index}>
                        <h4 className='text-secondary'>{id.name}</h4>
                        <h4 className='text-secondary'>{id.age}</h4>
                        <h4 className='text-secondary'>{id.desg}</h4>
                    </div>
                )
            })
          }

            <form onSubmit={submitData}>
                <div className='form-group w-25'>
                    <b>Data Field :</b>
                    <input type="text" value={dataToSend} onChange={handleChange} className='form-control' placeholder='Enter The Data'/><br/><br/>
                    <button type="submit" disabled={disabled} className='btn btn-primary btn-small form-control' onClick={sendData}>
                        SendToParent
                    </button>
                </div>
                
            </form>
    
          
          <h3>======================================================================</h3>
        
        </React.Fragment>
    )
}
export default Child;
