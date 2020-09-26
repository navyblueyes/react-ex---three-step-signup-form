import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import SignupForm from './components/SignupForm';


export default function App() {
  return (
    <Router>
      <SignupForm />;
    </Router>
  ) 
}
