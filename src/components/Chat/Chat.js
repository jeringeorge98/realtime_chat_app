import React,{useState,useEffect} from "react";
import io from "socket.io-client";
import querystring from 'query-string';
import TextContainer from '../TextContainer/TextContainer'
import './Chat.css'
import '../TextContainer/TextContainer.css';
import Messages from '../Messages/Messages'
import InfoBar from '../Infobar/Infobar'
import { Input } from "../Input/Input";


let socket;

export default function Chat({location}){
const[name,setName]=useState('');
const[room,setRoom] =useState('');
const[messages,setMessages] =useState([]);
const [message,setMessage] =useState('');
const [users,setUsers] =useState([]);
const ENDPOINT='https://chat-app-using-socket.herokuapp.com/';  



  useEffect(()=>{
const {name,room}= querystring.parse(location.search);

// console.log(name,room)
socket=io(ENDPOINT);
setRoom(room);
setName(name)

// console.log(socket)
socket.emit('join',{name,room},()=>{
// if(error){

//   alert(error)
// }

})

return ()=>{
  socket.emit('disconnect');
  socket.off();
}
},[ENDPOINT,location.search])

useEffect(() => {

  socket.on('message', message => {
    setMessages(messages => [ ...messages, message ]);
  });

  socket.on('roomData',({users})=>{

  setUsers(users)

  })

},[]);

// sending Message
const sendMessage=(e)=>{
  e.preventDefault();
if(message){
  socket.emit('sendMessage',message,()=>setMessage(''))

}

}

console.log(messages);

  return(

  <div className="outerContainer">
  
  <div className="container">
  <InfoBar 
  room={room}
  />
  <Messages
  messages={messages}
  name={name}
  />
  <Input
  message={message}
  setMessage={setMessage}
  sendMessage={sendMessage}
  />  
  
   </div>
   <TextContainer
   users={users}
   />  
  </div>
)

} 