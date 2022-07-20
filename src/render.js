import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { addPost , addMessage, updateNewText} from './Redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
export function  rerenderEntireTree (state){
    root.render(
      <React.StrictMode>
        <Router>
          <App state={state} addPost={addPost} addMessage={addMessage} updateNewText={updateNewText}/>
          
        </Router>
      </React.StrictMode>
    );
}


reportWebVitals();