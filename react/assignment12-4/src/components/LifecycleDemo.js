import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
    console.log('Constructor:', this.state.count);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps:', state.count);
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount:', this.state.count);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Current count:', this.state.count, 'Next count:', nextState.count);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate: Previous count:', prevState.count);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate: Current count:', this.state.count, 'Previous count:', prevState.count);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount:', this.state.count);
  }

  render() {
    console.log('Render:', this.state.count);
    return (
      <div>
        <h2>Lifecycle Demo</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default LifecycleDemo;
