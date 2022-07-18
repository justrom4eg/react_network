import './App.css';
import React from 'react'
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Setings/settings'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='contentStyle'>
          <Routes>
            <Route path='/messages/*' element={<Dialogs contactData={props.contactData} messageData={props.messageData} />} />
            <Route path='/profile' element={<Profile postData={props.postData} />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
