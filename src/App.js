import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from "./components/landing";
import Main from "./components/main";
import {TransitionGroup, CSSTransition,} from 'react-transition-group'

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <div>
          <Route render={({location}) =>(
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={500}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route exact path = '/' component = {Landing} />
                  <Route path = '/main' component = {Main} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        
      </div>
    </div>
    );
  }
}

export default App;

const styles={}

styles.app={
  position: 'relative',
  width: '100vw',
}