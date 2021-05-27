import React from 'react';
import './App.css';
import Post from './Post.js';
import PostTwo from './PostTwo.js';
import PostThree from './postThree.js'
import Log from './Meter.js';
import List from './List.js';
import Tutorial from './TutorialSection.js'
function App() {
  return (
    
    <div id="root">

      <Tutorial></Tutorial>
      <div className="App-header">
        <p className="App_dashboard">Lets see what's on the News Feed!</p>
        
      </div>
     
      <div className="App_body">
      <div className="App_left">
      <Log></Log>
      </div>
      
      <div className="App_middle">
      <PostTwo username="iam_tybalt" alphabet="T" imageUrl="https://miro.medium.com/max/992/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
      <Post username="pce_out" alphabet="P" imageUrl="https://miro.medium.com/max/992/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
      <PostThree username="paper.jewel" alphabet="J" imageUrl="https://miro.medium.com/max/992/1*HSisLuifMO6KbLfPOKtLow.jpeg"/>
      </div>
      
      <div className="App_right">
      <List></List>
      </div>
    </div>
    </div>
   
  );
}
export default App;
