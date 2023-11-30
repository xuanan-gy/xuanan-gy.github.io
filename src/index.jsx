// Needed to add the below due to issues in IE11, see this thread
// https://github.com/facebook/create-react-app/issues/9906#issuecomment-720905753
/** @jsxRuntime classic */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import InventoryItem from './pages/InventoryItem';
import Cart from './pages/Cart';
import CheckOutStepOne from './pages/CheckOutStepOne';
import CheckOutStepTwo from './pages/CheckOutStepTwo';
import Finish from './pages/Finish';
import { ROUTES } from './utils/Constants';
// import PrivateRoute from './components/PrivateRoute';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { msalInstance } from './components/MSAL';


const Routing = () =>{
  useEffect(()=>{

    msalInstance.acquireTokenRedirect(
      {
        redirectUri: "https://xuanan-gy.github.io/inventory.html"
      }
      ).then(res => {
        console.log(res)
      })
      .catch((e) => {
        console.log(e)
      })
    })
  return <Router>
    {/* <Route exact path={ROUTES.HOME} component={Inventory} /> */}
    <Route exact path={ROUTES.HOME} component={Login} />
    <Route path={ROUTES.INVENTORY} component={Inventory} />
    <Route path={ROUTES.INVENTORY_LIST} component={InventoryItem} />
    <Route  path={ROUTES.CART} component={Cart} />
    <Route  path={ROUTES.CHECKOUT_STEP_ONE} component={CheckOutStepOne} />
    <Route  path={ROUTES.CHECKOUT_STEP_TWO} component={CheckOutStepTwo} />
    <Route  path={ROUTES.CHECKOUT_COMPLETE} component={Finish} />
  </Router>
};

ReactDOM.render(<Routing/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
