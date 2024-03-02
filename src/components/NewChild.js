import React, { useState } from 'react';

const NewChild = () => {
    let [childData, setChildData] = useState({
        name: "Manu",
        desg: "SW Engineer",
        age: 30
    });

    const sendDataToParent = () => {
        // Logic to send data to parent component
    };

    return (
        <React.Fragment>
            <h1 className='text-success'>Child Comp</h1>
            <b className='text-secondary'>{JSON.stringify(childData)}</b><br />
            {Object.entries(childData).map(([key, value]) => {
                return (
                    <div key={key}>
                        <h1>{key}: {value}</h1>
                    </div>
                );
            })}
            <button className='btn btn-primary' onClick={sendDataToParent}>SendToParent</button>
            <h3>======================================================================</h3>
        </React.Fragment>
    );
};

export default NewChild;
