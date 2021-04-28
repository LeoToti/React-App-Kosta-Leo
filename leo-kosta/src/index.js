import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyBadge from "./components/MyBadge"
import 'bootstrap/dist/css/bootstrap.min.css';
import WarningSign from './components/WarningSign'
import SingleBook from './components/SingleBook'
import fantasy from './data/fantasy.json'
import history from './data/history.json'
import horror from './data/horror.json'
import romance from './data/romance.json'
import scifi from './data/scifi.json'
import BookList from "./components/BookList";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    < NavBar/>
    
    <WarningSign text="404" />
  <MyBadge color="danger" text="This is a badge" />
  <BookList books={history} />
  {/* <SingleBook books={books[0]}/> */}
    
=======

    <WarningSign text="404" />
    <MyBadge color="danger" text="This is a badge" />

>>>>>>> Stashed changes
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
