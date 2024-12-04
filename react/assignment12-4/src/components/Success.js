import React, { Component } from 'react';
import SuccessChild from './SuccessChild';
import SuccessStory from './SuccessStory';

class Success extends Component {
  handleRandomValue = (value) => {
    console.log('Random Value from SuccessStory:', value);
  };
  render() {
    return (
      <div className="success">
        <h1>Success Quotes</h1>
        <ul>
          <li className="message">"Some Message."</li>
        </ul>
        <SuccessChild Name="Tuan Do" Address="123 React Lane" children={
            <SuccessStory passValue={this.handleRandomValue} />
          }>
        </SuccessChild>
      </div>
    );
  }
}

export default Success;
