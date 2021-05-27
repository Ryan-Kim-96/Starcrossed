import React from 'react';
import './Meter.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import juliet from './julietprofile.png'
import benvolio from './Romeo.jpg'
import tybalt from './tybalt.png'
function Meter({content}){
    return(
    <div style={{position:'relative'}}>
        <div className="tape">
              
        </div>
    
        <div className="log">
            
                <div >
                    <h2 className="log_title">
                        Notification
                    </h2>
                    <h3>{content}</h3>
                </div>

                <div className="juliet_noti">
                <Image className="profile_picture" src={juliet} roundedCircle />
                <text style={{fontSize:'12px', marginLeft:'10px',marginTop:'10px'}}>@paper.jewel shared an article</text>
                </div>

                <div className="juliet_noti">
                <Image className="profile_picture" src={benvolio} roundedCircle />
                <text style={{fontSize:'12px', marginLeft:'10px',marginTop:'10px'}}>@r.montag shared an article</text>
                </div>

                <div className="juliet_noti">
                <Image className="profile_picture" src={benvolio} roundedCircle />
                <text style={{fontSize:'12px', marginLeft:'10px',marginTop:'10px'}}>@r.montag commented on an article</text>
                </div>
               
        </div>
        </div>
    )
}

export default Meter;