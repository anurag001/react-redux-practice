import React, { Component } from 'react';
import Message from './container/messageContainer';

class App extends Component {
   render() {
      return (
         <div className = "App">
            <header className = "App-header">
               <Message/>
            </header>
         </div>
      );
   }
}
export default App;