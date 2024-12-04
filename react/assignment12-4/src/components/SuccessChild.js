import React from 'react';

const SuccessChild = ({ Name, Address, children }) => {
    return (
      <div>
        <h2>SuccessChild Component</h2>
        <p>Name: {Name}</p>
        <p>Address: {Address}</p>
        {children}
      </div>
    );
  };
  
  export default SuccessChild;
  