import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
function rerenderEntireTree() {
  root.render(
    <React.StrictMode>
      <Router>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
      </Router>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscriber(rerenderEntireTree)


reportWebVitals();