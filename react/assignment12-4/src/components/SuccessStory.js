import React from 'react';

const SuccessStory = ({ passValue }) => {
  const randomValue = Math.random();
  passValue(randomValue);
  return <p>Random Value: {randomValue}</p>;
};
  
  export default SuccessStory;
  