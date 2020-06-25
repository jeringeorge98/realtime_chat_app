import React from 'react'
import Scroll from 'react-scroll-to-bottom';
import Message from '../Message/Message'
import './Messages.css'
 const Messages = ({messages,name}) => {
    console.log(messages,"messages")
   console.log(name,"name")
    return (
        <Scroll className="messages">
        {messages.map((message,i)=>(<div key={i}><Message message={message} name={name}/></div>))}
        
        </Scroll>
    )
}

export default Messages