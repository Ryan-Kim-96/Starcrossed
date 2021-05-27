import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BestEnd from './BestEnding.js'
import BadEnd from './BadEnding.js'
import NeutralEnd from './NeutralEnd.js'
import Aftergame from './AfterGame.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
ReactDOM.render(
     <Router>
    <Switch>
      <Route path="/Capstone" exact component={App}></Route>
      <Route path="/bestend" component={BestEnd}></Route>
      <Route path="/badend" component={BadEnd}></Route>
      <Route path="/neutralend" component={NeutralEnd}></Route>
      <Route path="/aftergame" component={Aftergame}></Route>
    </Switch>
    </Router>,
  document.getElementById('root')
);

