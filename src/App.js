import './App.css';
import React from 'react'
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
