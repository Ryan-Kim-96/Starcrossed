import React from "react";
import './BestEnding.css'
import Image from 'react-bootstrap/Image';
import endingImage from './Bad End.jpg';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
 function BadEnding() {

     return (
       <div>
         <div className="endingPicture">
         <Image className="ending_picture" src={endingImage} rounded />
         </div>

         <div >
           <h1 className="ending_title"><strong>Crash and Burn</strong></h1>
         </div>

         <div className="ending_description">
<text ><strong style={{fontSize:'22px'}}>Yikes!</strong> You’ve gotten the Bad Ending. If the game were completed, players would have received this ending if they scored low in credibility points based on the type of content they shared in total.
  
<br></br>
<br></br>
You got this ending by sharing the <strong>Montague News article.</strong> In a nutshell, screenshots of claims are unreliable since there generally isn’t enough information to make an informed opinion. It is also fairly easy to manipulate. The overall language skews towards the Montagues (since some of their employees were involved in the event) and it is written to invoke strong emotions from its viewers in order to have it shared.
<br></br>
<br></br>
<strong style={{fontSize:'22px'}}>Scenario: </strong>
<br></br>
Due to the strong hate and distrust from both families at each other, Romeo and Juliet’s relationship was met with huge scrutiny and disapproval. Many of the general public even speculated it was an attempt to get higher audience engagement for both companies. The couple splits up over the pressure, with Romeo disappearing from social media and Juliet’s new poetry book bombing upon release. 

<br></br>
<br></br>
Play again to try for a different ending or explore our website for more resources on misinformation! 
</text>
         </div>

         <div className="ending_escape">
           <Link to='/Starcrossed'><Button type="primary">Start Over</Button></Link>
           <Link to='/aftergame'><Button style={{marginLeft:"20px"}} type="primary">End Credit</Button></Link>
         </div>
       </div>
     );

 }

 export default BadEnding;