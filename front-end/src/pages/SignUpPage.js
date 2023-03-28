import { useState } from "react";
import { useHistory } from "react-router-dom";

export const SignUpPage = () => {
    const history = useHistory();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswprdValue] = useState('');
    const [confirmPasswordValue, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSignUpClicked  = () => {
        console.log("Sign clicked");
        setErrorMessage('sign up Clicked');
    }

    return (
        <div className="content-container">
            <h1> Sign Up</h1>
            {errorMessage && <div>{errorMessage}</div>}
            <input 
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)} type="text" placeholder="someone@gmail.com" />
            <input 
                value={passwordValue}
                onChange={ e => setPasswprdValue(e.target.value)} type="password" placeholder="password" />
            <input
                type="password"
                value={confirmPasswordValue}
                onChange={e => {setConfirmPassword(e.target.value)}}
                placeholder="Password" />
            <button type="button" disabled={! emailValue || !passwordValue || passwordValue !== confirmPasswordValue}
                onClick={onSignUpClicked}> Sign Up </button>
            Already have an account. Go to 
            <button onClick={() => history.push('/login')} type="button"> Login Page</button>
        </div>
    );
}