import React from "react";
import './BestEnding.css'
import Image from 'react-bootstrap/Image';
import endingImage from './Good End.jpg';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
 function BestEnding() {

     return (
       <div>
         <div className="endingPicture">
         <Image className="ending_picture" src={endingImage} rounded />
         </div>

         <div >
           <h1 className="ending_title"><strong>Candid Love</strong></h1>
         </div>

         <div className="ending_description">
<text ><strong style={{fontSize:'22px'}}>Congratulations! 🎉🎉🎉</strong> You got the Best Ending. If the game were completed, players would have received this ending if they got high credibility points based on the type of content they shared in total.

You got this ending by sharing the Verona Times article. In a nutshell, it was the most unbiased article that featured a government report to supplement its claims. The publisher was also a third-party separated from involvement from the actual event itself.  
<br></br>
<br></br>
<strong style={{fontSize:'22px'}}>Scenario: </strong>
<br></br>
With your help showing the world what is true and legitimate from the fake and misleading, Romeo and Juliet are able to publicly be together with avid support from their fans and the general public. Both Capulets and Montagues news companies are pressured to reform their ways of conducting news for the greater good in order to repair their now soiled reputations. 

<br></br>
<br></br>
Play again to try for a different ending or explore our website for more resources on misinformation! 
</text>
         </div>

         <div className="ending_escape">
           <Link to='/Capstone'><Button type="primary">Start Over</Button></Link>
           <Link to='/aftergame'><Button style={{marginLeft:"20px"}} type="primary">End Credit</Button></Link>
         </div>
       </div>
     );

 }

 export default BestEnding;