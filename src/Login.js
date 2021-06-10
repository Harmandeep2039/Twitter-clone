import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from './StatePovider';
function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => { 

            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_logo">
            <img
            src="https://1000logos.net/wp-content/uploads/2017/06/logo-Twitter.png"alt=""/>
            <img src="https://www.orissapost.com/wp-content/uploads/2019/12/twitter-app-icon-ios2.jpg"alt="" />
            </div>
            <Button type="submit" onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    );
}

export default Login;