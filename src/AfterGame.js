import React from 'react';
import './App.css';
import JulietPost from './AfterGameJuliet.js';
import Log from './AfterGameNotification.js';
import List from './AfterGameMessages.js';
import RomeoPost from './AfterGameRomeo.js'
import SecondRomeoPost from './AfterGameRomeoTwo.js'
import ThirdRomeoPost from './AfterGameRomeoThree.js'
import FourthRomeoPost from './AfterGameRomeoFour.js'
import SecondJulietPost from './AfterGameJulietTwo.js'
import ThirdJulietPost from './AfterGameJulietThree.js'
import AftergameEnding from './AfterGameEnding.js'
function Aftergame() {
  return (
    
    <div id="root">
      <div className="App-header">
        <p className="App_dashboard">Lets see what's on the News Feed!</p>
        
      </div>
     
      <div className="App_body">
      <div className="App_left">
      <Log></Log>
      </div>
      
      <div className="App_middle">
        <JulietPost username="paper.jewel"></JulietPost>
        <RomeoPost username="r.montag"></RomeoPost>
        <SecondRomeoPost username="r.montag"></SecondRomeoPost>
        <ThirdRomeoPost username="r.montag"></ThirdRomeoPost>
        <SecondJulietPost username="paper.jewel"></SecondJulietPost>
        <FourthRomeoPost username="r.montag"></FourthRomeoPost>
        <ThirdJulietPost username="paper.jewel"></ThirdJulietPost>
        <AftergameEnding username="Hejido Studio"></AftergameEnding>
      </div>
      
      <div className="App_right">
      <List></List>
      </div>
    </div>
    </div>
   
  );
}
export default Aftergame;
