import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';
import Banner from './component/Banner';
import About from './component/About';
import Team from './component/Team';
import OurCustomer from './component/OurCustomer';
import Responsibility from './component/Responsibility';
import Video from './component/Video';
import Quality from './component/OurQuality';
import Footer from './component/Footer'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Banner />
    <About />
    <Team />
    <OurCustomer/>
    <Responsibility />
    <Video />
    <Quality />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
