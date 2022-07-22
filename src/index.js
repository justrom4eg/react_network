import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import state from './Redux/state';
import { addPost , addMessage, updateNewText, updateNewMessage ,subscriber} from './Redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
export function  rerenderEntireTree (){
    root.render(
      <React.StrictMode>
        <Router>
          <App state={state} addPost={addPost} addMessage={addMessage} updateNewText={updateNewText} updateNewMessage={updateNewMessage}/>
        </Router>
      </React.StrictMode>
    );
}

rerenderEntireTree(state)

subscriber(rerenderEntireTree)


reportWebVitals();
