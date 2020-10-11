import React, { Component } from 'react';
import '../css/index.css';
class List extends Component {
    render() {
        return <div className="flex-style">
            {this.props.data.map((el, index) => (
            <div className="box" key={index}>
                <div className="delete-box" onClick={() => this.props.dataFunction(index)}>X</div>
                <div className="box-title"><b>{el.title}</b></div>
                <p>{el.description}</p>
            </div>
            ))}
        </div>;
      }
}
export default List;