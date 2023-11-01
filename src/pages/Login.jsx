import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';
import MicrosoftLogin from "react-microsoft-login";
import {
  isLockedOutUser,
  setCredentials,
  verifyCredentials,
} from '../utils/Credentials';
import { ROUTES } from '../utils/Constants';
import InputError, { INPUT_TYPES } from '../components/InputError';
import SubmitButton from '../components/SubmitButton';
import ErrorMessage from '../components/ErrorMessage';
import {app, microsoftProvider} from "../components/Firebase";
import { msalInstance } from '../components/MSAL';

function Login(props) {
  const { history, location } = props;
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (location.state) {
      return setError(
        `You can only access '${location.state.from.pathname}' when you are logged in.`
      );
    }
  }, [location.state]);

  const dismissError = () => {
    setError('');
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // app.auth().signInWithRedirect(microsoftProvider)
    // .then(
    //   (cred) => {
    //     console.log(cred)
    //     setCredentials(cred)
    //     history.push(ROUTES.INVENTORY)
    //   }
    // )
    app.auth().signInWithPopup(microsoftProvider)
    .then(
    (result)=>{
      history.push(ROUTES.INVENTORY)
    }
    )
  };

  const handleUserChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePassChange = (evt) => {
    setPassword(evt.target.value);
  };

 const onMicrosoftLogin = (err, data) =>{
    console.log(err,data)
 }

  return (
    <div className="login_container">
      <div className="login_logo">Swag Labs</div>

      <div className="login_wrapper">
        <div className="login_wrapper-inner">
          <div id="login_button_container" className="form_column">
            <div className="login-box">
              {/*  */}
              <SubmitButton
                  // `btn_action` has no style function
                  // but is there for backwards compatibility
                  customClass="btn_action"
                  testId="login-button"
                  value="Login"
                  onClick={handleSubmit}
                />
            </div>
          </div>
        </div>
        <div className="login_credentials_wrap">
          <div className="login_credentials_wrap-inner">
            <div id="login_credentials" className="login_credentials">
              <h4>Accepted usernames are:</h4>
              standard_user
              <br />
              locked_out_user
              <br />
              problem_user
              <br />
              performance_glitch_user
              <br />
            </div>
            <div className="login_password">
              <h4>Password for all users:</h4>
              secret_sauce
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
