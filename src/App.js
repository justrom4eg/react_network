import './App.css';
import React from 'react'
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Profile from './components/Profile/profile';
import Dialogs from './components/Dialogs/dialogs';
import Music from './components/Music/music';
import News from './components/News/news';
import Settings from './components/Setings/settings'
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav contactData={props.state.dialog.contactData} />
      <div className='contentStyle'>
        <Routes>
          <Route path='/messages/*' element={<Dialogs contactData={props.state.dialog.contactData} messageData={props.state.dialog.messageData} newMessageText={props.state.dialog.newMessageText} addMessage={props.addMessage} updateNewMessage={props.updateNewMessage} />} />
          <Route path='/profile' element={<Profile postData={props.state.posts.postData} newPostText={props.state.posts.newPostText} addPost={props.addPost} updateNewText={props.updateNewText} />} />
          <Route path='/music' element={<Music />} />
          <Route path='/news' element={<News />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
