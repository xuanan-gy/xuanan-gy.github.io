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
   
    return '';
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
   <></>
  );
}

export default withRouter(Login);
