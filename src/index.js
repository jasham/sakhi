import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom'; import './assets/styles/index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
// import { store } from './redux/store'; 


ReactDOM.render(
  <Provider 
    // store={store}
  > 
   <BrowserRouter> 
        <Switch> {/* <Route exact path="/playground" component={Playground} /> */} 
          <Route exact path='/' component={Onboarding} />  
        </Switch> 
    </BrowserRouter> </Provider>, document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
