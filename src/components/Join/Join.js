import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import TextContainer from "../TextContainer/TextContainer"
import './Join.css' 
const Join=()=>{
  const users=[{name:"jerin"}]
   const [name,setName] = useState('');
   const [room,setRoom] = useState('');
   return(
     <div className="joinOuterContainer">
     <div className="joinInnerConatiner">
     <h1 className="heading">
     Join
     </h1>
     <div><input placeholder="Name" className="joinInput" onChange={(e)=>setName(e.target.value)}></input></div>
     <div><input placeholder="Room" className="joinInput mt-20" onChange={(e)=>setRoom(e.target.value)}></input></div>
     <Link onClick={(e)=>(!name||!room)?e.preventDefault():null} to ={`/chat?name=${name}&room=${room}`}>
     <button className="button mt-20" type="submit" >Join</button>
     </Link>
     </div>
     </div>



   )


}
export default Join;