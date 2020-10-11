import React, { Component } from 'react';
class Message extends Component {
   constructor(props) {
      super(props); 
      this.state = {input:""};
      this.textInput = React.createRef();
   }
   handleChange = () => {
      this.setState({input:this.textInput.current.value});
      console.log(this.textInput.current);
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
            <div><input type="text" ref = {this.textInput} onChange={this.handleChange} /></div>
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