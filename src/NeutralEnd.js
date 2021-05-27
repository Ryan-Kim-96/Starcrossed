import React from "react";
import './BestEnding.css'
import Image from 'react-bootstrap/Image';
import endingImage from './Neutral End.jpg';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
 function NeutralEnding() {

     return (
       <div>
         <div className="endingPicture">
         <Image style={{width:"900px"}} src={endingImage} rounded />
         </div>

         <div >
           <h1 className="ending_title"><strong>Elopement </strong></h1>
         </div>

         <div className="ending_description">
<text ><strong style={{fontSize:'22px'}}>You’ve gotten the Neutral Ending.</strong> If the game were completed, players would have received this ending if they averaged near the middle in credibility points based on the type of content they shared in total.

<br></br>
<br></br>
You got this ending by sharing the <strong>Capulet Corp News</strong> article. In a nutshell, although it had some factual information, it skewed to favor the Capulet employees causing it to be misleading. There can also be some doubt to some of the quotes presented as well (particularly from the mothers). The publisher is also indirectly involved as the news features their own employees. 
<br></br>
<br></br>
<strong style={{fontSize:'22px'}}>Scenario: </strong>
<br></br>
The world can only speculate on what’s true or not from either company. Feeling unsure over what the public opinion will be and what the overall impact their relationship scandal will cause on their families, Romeo and Juliet go quiet on all social media and elope together. 

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

 export default NeutralEnding;