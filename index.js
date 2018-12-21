import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MathOperation from './MathOperation';
import * as serviceWorker from './serviceWorker';
import StateLessComponent from './StateLessComponent';
import GetTaskClass from './GetTaskClass';
import DropDownParentComponent from './DropDownParentComponent';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Router, Route, browserHistory } from 'react-router'

//ReactDOM.render(<MathOperation op={"00"} val1={'01'}/>, document.getElementById('root'));

//ReactDOM.render(<StateLessComponent name="madhu"/>, document.getElementById('root'));
ReactDOM.render(<DropDownParentComponent/>, document.getElementById('root'));


// ReactDOM.render((
//     <Router history = {browserHistory}>
//        <Route path = "/">
//         <Route path = "contact" render={() => <Contact num="1457845"/>}
//         />
//         <Route path = "home" component = {Home} />
//      </Route>
//     </Router>
//  ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
