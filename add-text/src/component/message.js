import React, { Component } from 'react';
class Message extends Component {
   constructor(props) {
      super(props); 
      this.state = {input:""};
   }
   handleChange = (event) => {
      this.setState({input: event.target.value});
      console.log(this.state.input);
   }

   renderText = (messages) => {
      return (
         <div>
           {messages.map((el, index) => (
             <p key={index}>{el}</p>
           ))}
         </div>
       );
   }

   render() {
      const {add,list} = this.props;
      return (
         <div className = "App">
            <div><input type="text" onChange={this.handleChange} /></div>
            <div>
               <button onClick = {() => add(this.state.input)}>ADD</button>
            </div>
            <br/>
            {this.renderText(list)}
         </div>
      );
   }
}
export default Message;