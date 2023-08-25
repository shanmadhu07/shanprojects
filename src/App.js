import logo from './logo.svg';
///import './App.css';
import Buttonpanel from "./Buttonpanel";
import Gallery from './Gallery';
import React from 'react';



class App extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      category:'all'
    }
  }
 


getdata= (category1) =>{
  this.setState({category:category1});
}

  render(){
    return(
    <div>
      <Buttonpanel sendData={this.getdata}/>
      <Gallery send={this.state.category}/>
      
    </div>
    )
    
  }

}





export default App;