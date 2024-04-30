import React, { Component } from 'react';
class Child extends Component {


render(){
    return(
        <div>
            <button onClick={this.props.changeValue}>{this.props.displayName}</button>
        </div>
    )
}
}
export default Child;