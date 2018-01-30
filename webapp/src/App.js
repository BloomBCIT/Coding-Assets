import React, { Component } from 'react';
import './App.css';
import mySocket from 'socket.io-client';
import {Animated} from "react-animated-css";


class App extends Component {
    
constructor(props){
    super(props);


    this.state = {
            mode:0,
            username:"",
            users:[],
            allChats: [],
            myMsg: "",
        }
        
        this.joinChat = this.joinChat.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleMyMsg = this.handleMyMsg.bind(this);
        this.sendChat = this.sendChat.bind(this);
        
    }
    componentDidMount(){
       // this.socket = mySocket("http://localhost:10001");    
        
    }
    
    
    joinChat(){
        this.setState({
            mode:1
        })
        console.log(this.state.username);
        this.socket = mySocket("http://localhost:10001");
        this.socket.emit("username", this.state.username); 


        //user anonymous function ()=>{}
        //it gets stores in this function for usernames array
        this.socket.on("usersjoined", (data)=>{
            console.log(data);
            this.setState({
                users:data
            })
        });
        this.socket.on("msgsent", (data)=>{
            this.setState({
                allChats:data
            })
        })
    }
    
    handleUsername(evt){
        this.setState({
            username:evt.target.value
        })
    }
    
    handleMyMsg(evt){
        this.setState({
            myMsg:evt.target.value
        })
    }
    sendChat(){
        var msg = this.state.username +" : " + this.state.myMsg;
        //Kaylie : hi
        this.socket.emit("sendChat", msg);
    }


    
    
  render() {

    var config = null;
        
        if(this.state.mode === 0){
            config= (
            
            
            <div>
                <input type = "text" placeholder = "Typer your username" onChange={this.handleUsername} />
                <button onClick = {this.joinChat}>Join Chat </button>
            </div>
        
        )
    } else if(this.state.mode ===1){

        var allChats = this.state.allChats.map((obj,i)=>{
            return(
                <div key={i}>
                    {obj}
                </div>
                )
        });

        config = (
                <div id ="chatbox">

                    <div id="chatDisplay">
                        {allChats}
                    </div>
                    <div id="controls">
                        <input type="text" placeholder="type your message" onChange={this.handleMyMsg}/>
                        <button onClick={this.sendChat}>Send</button>

                    </div>
                </div>
            )
    }
    var allUsers = this.state.users.map((obj,i)=>{
        return (
            //srround with div

            <div key={i}>
                {obj}
            </div>

            )
    })

     
     
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


           // From last class //

            <div className="App">
            {config}
                <div id ="allUsers">
                  Users in the chatroom right now
                    <hr/>

                    <div id="users">
                    {this.state.users.join(",")}
                    </div>
                </div>
            </div>
        
        </div>
      </div>
    );
  }
}

export default App;


