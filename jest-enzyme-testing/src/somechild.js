import React, { Component } from 'react';
class SomeChild extends Component{
    shownum(list){
        return(
            <div>
                <ul>
                {list.map((el,index)=>(
                    <li key={index}>{el}</li>
                ))}
                </ul>
            </div>
        );
    }
   render(){
      return(
         <div>
            <h1>Hello Child Component!!</h1>
            {this.shownum(this.props.data)}
         </div>
      );
   }
}
export default SomeChild;