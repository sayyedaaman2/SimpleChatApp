const express = require('express');
const app = express();
const http = require('http').Server(app);
const socket = require('socket.io');
const io = socket(http);
const serverConfig = require('./config/server.config');
/**
 *  Even when then cleitn tries to connect to the 
 * server
 */

var users = [];
function removeUser(users,userName){
    let newArray = [];

    for(let i=0;i < users.length; i++){
        if(users[i] != userName){
            newArray.push(users[i]);
        }
    }
    return newArray;
}
io.on('connection', (socket)=>{
    console.log("User connected "+ socket.id)
    var User;
    socket.on('setUserName', (userName)=>{
        console.log(`Set User Name request : ${userName}`);
        //Write the Logic to validate the userName already picked

        if(users.indexOf(userName)<0){
            console.log(`UserName is Unique ${userName}`);

            // userName is new
            User = userName;
            users.push(userName);
            socket.emit('userAllowed', {
                username: userName
            });
        }else{
            console.log('userName is Already Exists');
            socket.emit('userExists', `username already exists ! Try something unique `);

        }
        console.log(users);
        
    })
    socket.on('msg', (data)=>{
        io.sockets.emit('newMessage', data);
    });

    socket.on('disconnect',()=>{
        users = removeUser(users,User);

        console.log("User disconnected " + User);

    })
})

app.use(express.static(__dirname + '/public'));
/**
 *  Redering html
 */

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

http.listen(serverConfig.PORT,()=>{
    console.log(`Application Started at  PORT: ${serverConfig.PORT}`);
})
