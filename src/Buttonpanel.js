import React from "react";
import './Buttonpanel.css';


class Buttonpanel extends React.Component{
    constructor(props){
        super(props);
    }
    all(val){
        this.props.sendData(val);
    }
   
    render(){
        return(
            
             <div className="buttonparent df jc">
                <button className="button1" onClick={()=>{this.all('all')}}> Movies </button>
                <button  className="button1" onClick={()=>{this.all('thrill')}}> Thriller </button>
                <button  className="button1"  onClick={()=>{this.all('hor')}}> Horror </button>
                <button  className="button1"  onClick={()=>{this.all('com')}}> Comedy </button>
                </div>
             
        );
    }
}





export default Buttonpanel;