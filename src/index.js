import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {LoginForm} from './loginForm';
import {RegisterForm} from './RegisterForm';
import {Header} from "./header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
ReactDOM.render(
    <div>
        <Router>
            <Header/>
            <Switch>
                <Route path={"/register"}>
                    <div><RegisterForm/></div>
                </Route>
                <Route path={"/sign"}>
                    <div><LoginForm/></div>
                </Route>
            </Switch>
        </Router></div>
,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
