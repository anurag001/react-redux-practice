import React, { Component } from 'react';
import List from './listposts';
class Message extends Component {
   constructor(props) {
      super(props); 
      this.state = {tile:"",description:""};
      this.titleInput = React.createRef();
      this.descriptionInput = React.createRef();
   }

   handleTitleChange = () => {
      this.setState({title:this.titleInput.current.value});
      console.log(this.titleInput.current.value);
   }

   handleDescriptionChange = () => {
      this.setState({description:this.descriptionInput.current.value});
      console.log(this.descriptionInput.current.value);
   }


   render() {
      const {add,list,remove} = this.props;
      return (
         <div className = "App">
            <label>Title:</label>
            <div><input type="text" ref={this.titleInput} onChange={this.handleTitleChange} /></div>
            <br/>
            <label>Description:</label><br/>
            <textarea ref={this.descriptionInput} onChange={this.handleDescriptionChange}></textarea>
            <div>
               <button onClick = {() => add(this.state)}>ADD</button>
            </div>
            <br/><hr/>
            <List data={list} dataFunction={remove}/>
         </div>
      );
   }
}
export default Message;