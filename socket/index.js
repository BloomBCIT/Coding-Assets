const server = require("http").Server();
const port = 10001;

var io = require("socket.io")(server);


var usernames = [];
var msgs = [];

io.on("connection", function(socket){
    
   console.log("user is connected"); 


   socket.on("username", function(data){
   	console.log("user is giving username" + data);
   	usernames.push(data);

   	//after someone joined, let others read that the someone joined
   	// io => server ( message the following, send the entire array over)
   	io.emit("usersjoined", usernames);

   })
   socket.on("sendChat", function(data){
    console.log("user sent a msg for chat");
    msgs.push(data);

    io.emit("msgsent", msgs);
   })

   socket.on("disconnect", function(){
   	console.log("user has disconnnected");
   })
    
});

server.listen(port, (err)=>{
    if(err){
        console.log("Error:" +err);
        return false;
        
    }
    console.log("socket port is running");
});





