import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

class App extends React.Component {
  render() {
    return (
        <div className="wrapper">
        <Header/>
          <div className="container">
            <Content/>
          </div>
        <Footer/>
        </div>
    );
  }
}

export default App;
