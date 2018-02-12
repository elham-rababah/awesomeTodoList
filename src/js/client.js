import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, hashHistory, browserHistory} from 'react-router'

import Layout from "./components/Layout";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/UserProfile/UserProfile";

const isLogin =function (){
	if(!sessionStorage.getItem('userInfo')){
		window.location.replace('#/signin');
	}
}
const app = document.getElementById('app');
ReactDOM.render((
	<Router history={hashHistory}>
	    <Route path="/" component={Layout}/>
	    <Route path="/signin" component={SignIn}/>
	    <Route path="/signup" component={SignUp}/>
	    <Route path="profile/:username" component={Profile} onEnter={isLogin}/>
  	</Router>
  ), app);