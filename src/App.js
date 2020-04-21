import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Dashboard from './Components/dashboard';
import Info from './Components/info';


function App() {
  return (
    <div>
      <Header/>
      <Dashboard/>
      <Info/>
      <Footer/>
      
    </div>
  );
}

export default App;
