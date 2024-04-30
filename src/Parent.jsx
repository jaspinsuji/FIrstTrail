
import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor() {
        super();
        this.state = {
          name: 'aaa',
          age:20
        };

      } 
      
// componentwillmount(){}
// componentDidMount(){}
// componentwillReceiveProps(newProps){}
// shouldComponentUpdate(){}
// ComponentWillUpdate(){}
// componentDidUpdate(){}
// componentWillunmount(){}

      changeValue =() => {
        this.setState({
            name: 'bbb'
          });
      }
  render() {
    return (<>
    <h1>Hello, {this.state.name}</h1>
    <Child displayName={this.state.name} changeValue ={this.changeValue}/>
    </>)
  }
}

export default Parent;
