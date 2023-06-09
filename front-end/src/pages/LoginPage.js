import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useToken } from "../auth/useToken";

export const LogInPage = () => {
    const [, setToken] = useToken();
    const [errorMessage, setErrorMessage] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswprdValue] = useState('');

    const history = useHistory();
    const onLogInClicked = async () => {
        console.log("Login Clicked");

        try{
            const response = await axios.post('/api/login', {
                email: emailValue,
                password: passwordValue
            });
            const { token } = response.data;
            setToken(token);
            history.push('/');
        } catch(err) {
            setErrorMessage('Error: '+ err);
        }
    }


    return (
        <div className="content-container">
            <h1> Log In</h1>
            {errorMessage && <div> errorMessage</div>}
            <input
                type="text"
                value={emailValue}
                onChange={ event => setEmailValue(event.target.value)}
                placeholder="someone@gmail.com"/>
            <input
                value={passwordValue}
                onChange={event => setPasswprdValue(event.target.value)}
                type="password"
                placeholder="someone@gmail.com"/>
            <button 
                onClick={onLogInClicked}
                type="button" disabled={ !emailValue || !passwordValue}>Log In</button>
            <button type="button" onClick={()=> history.push('/forgot-password')}>Forgot your Password</button>
            <button type="button" onClick={()=> history.push('/signup')}>Don't have an account? Sign Up</button>
        </div>
    )
}