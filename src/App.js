import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SingupForm from './components/SignupForm';


export default function App() {
  return (
    <Router>
      <div className="app">Signup form goes here</div>;
    </Router>
  ) 
}
