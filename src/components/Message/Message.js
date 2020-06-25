import React from 'react'
import './Message.css'
import Emoji from 'react-emoji';
 const Message = ({message:{user,text},name}) => {
 let isSentByCurrentUser= false;
 const Trimmedname=name.trim().toLowerCase();
 console.log(user,"user")
 console.log(Trimmedname,"timmed")
 if(user === Trimmedname){
     isSentByCurrentUser=true;
 }

    return (
        isSentByCurrentUser?(
            
            <div className="messageContainer justifyEnd">

            <p className="sentText pr-10">{Trimmedname}</p>
             <div className="messageBox backgroundBlue">
             <p className="messageText colorWhite">{Emoji.emojify(text)}</p>
             </div>
            </div>):(

        <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{Emoji.emojify(text)}</p>
        </div>
        <p className="sentText pl-10">{user}</p>
        </div>
            )  
    )
}

export default Message