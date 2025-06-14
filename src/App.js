import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';  // Correct relative import
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />  {/* Add Navbar at the top */}
      <HomePage/>
    </div>
  );
}

export default App;
