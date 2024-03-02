import React,{useState} from 'react';
import './App.css';
import Timer from './components/Timer';
import Receiver from './components/Receiver';
import { UserContext } from './context/context';
import Counter from './components/Counter';
import Child from './components/child';

function App() {
  const [showTable,setShowTable]=useState(false);
  const [user,setUser]= useState({
    name:"ROHIT",
    AGE:30
  })
  const [receiveData,setReceiveData]=useState('');
  const toggleTable=()=>{
    setShowTable(!showTable);
  }
  const handleDataFromChild=(data)=>{
    setReceiveData(data)
  }

  return (
    <div className="App">
      {/* <div className='sidebar'>
        <button onClick={toggleTable}>ShowTable</button>

      </div>
      <div className='content'>
        <header>
          <h1>Menu Bar</h1>
        </header>
        {
          showTable &&(
            <table>
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data </td>
                  <td>Data </td>
                  <td>Data </td>
                </tr>
              </tbody>
            </table>
          
          )
        }

      </div> */}
      <Child sendDataToParent={handleDataFromChild}/>
      {/* <Timer/> */}
      <Counter/>
      <UserContext.Provider value={user}>
         <Receiver/>
      </UserContext.Provider>
      <h1 className='text-success'>This is App.js component.</h1>
      <h2 className='text-warning'>Data received from Child :<i className='text-danger'>{receiveData}</i></h2>

    
 
    </div>
  );
}

export default App;
