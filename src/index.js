import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { name: "Katia", message: "Hello,React it's awesome!!!", like: 52, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" },
  { name: "Marta", message: "React???Angular more better", like: 3, img: "https://i.iheart.com/v3/re/new_assets/6297b1025c828d267a93f142?ops=contain(1480,0)" },
  { name: "Katia", message: "I disagree...", like: 17, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" },
  { name: "Katia", message: "REACT TOP", like: 119, img: "https://themoney.co/wp-content/uploads/2022/01/How-much-does-Ariana-Grande-make-2020-scaled.jpg" }
]

let contactData = [
  { name: "Nata", id: 0 },
  { name: "Dima", id: 1 },
  { name: "Katia", id: 2 },
  { name: "Nazar", id: 3 },
  { name: "Ira", id: 4 },
  { name: "Ivan", id: 5 }
];

let messageData = [
  { message: "Hello", id: 0 },
  { message: "Hi!", id: 1 },
  { message: "How are you?", id: 2 }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postData={postData} contactData={contactData} messageData={messageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
