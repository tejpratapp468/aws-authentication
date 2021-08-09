import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <MainRouter />
        <AmplifySignOut />
       <h2> Pravaig Dynamics </h2>
    </BrowserRouter>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
