import React from 'react'
import './Infobar.css'
// import onLineIcon from '../../assets/onlineIcon.png'
// import closeIcon from '../../assets/closeIcon.png'
const onLineIcon =require('../../assets/onlineIcon.png')
const closeIcon =require('../../assets/closeIcon.png')
const Infobar = ({room}) => {

    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
      <img className="onlineIcon"  alt="OnlineImage" src={onLineIcon}/>
            
      <h3>room</h3>
             
             
            </div>
            <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="closeImage">
            </img>
    </a>
            </div>
        </div>
    )
}

export default Infobar
