import React, { Component } from 'react';
import './App.css';
import {Animated} from "react-animated-css";

class App extends Component {
    
constructor(props){
    super(props);
}
    
    
  render() {
     
     
    return (

      <div className="container">
        <div className="wrap">
            
            <div className="bloomDiv">
                <h1 className="bloom">BLOOM</h1>
                <h2>We offer the best flowering tea</h2>
            </div>
        
            <div className="kaylie">
                <Animated animationIn="swing" animationOut="swing" isVisible={true}>
                    <p className="kaylieP">Kaylie Son</p>
                    <p>Designer</p>
                    <div className="kaylieCircle"></div>
                </Animated>
                    
                    <div className="kaylieNote"></div>
            </div>

             <div className="sehee">
                <Animated animationIn="swing" animationOut="swing" isVisible={true}>
                    <p className="seheeP">Se Hee Ahn</p>
                    <p>Designer</p>
                    <div className="seheeCircle"></div>
                </Animated>
                    
                    <div className="seheeNote"></div>
            </div>
        
        </div>
      </div>
    );
  }
}

export default App;


