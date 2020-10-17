import React, { Component } from 'react';
import SomeChild from './somechild';
class App extends Component{
   render(){
      return(
         <div>
            <h1>Hello!!</h1>
            <h2>Welcome to your First React App..!</h2>
            <SomeChild data={[1,2,3,4,5]}/>
         </div>
      );
   }
}
export default App;