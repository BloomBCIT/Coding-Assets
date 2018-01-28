import React, { Component } from 'react';
import './App.css';
import {Animated} from "react-animated-css";
import logo from "./img/logo2.png";

class App extends Component {
    
constructor(props){
    super(props);
}
    
    
  render() {
     
     
    return (

      <div className="container">
        <div className="wrap">
            
            <div className="bloomDiv">

               <img src={logo} alt="Logo" />
            </div>
        
            <div className="kaylie">
                <Animated animationIn="swing" animationOut="swing" isVisible={true}>
                    
                    
                    <div className="kaylieCircle">
                        <p className="name">KAYLIE SON</p>

                    </div>
                </Animated>
                    
                   
            </div>

             <div className="sehee">
                <Animated animationIn="swing" animationOut="swing" isVisible={true}>
                   
                    
                    <div className="seheeCircle">
                     <p className="name">SEHEE AHN</p>
                    </div>
                </Animated>
                    
                   
            </div>
        
        </div>
      </div>
    );
  }
}

export default App;


