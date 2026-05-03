import { useState } from 'react';
import '../../src/index.css';
import Header from './Header/Header';
import Main from './Main';
import Footer from './Footer/Footer';

function App() {
  return(
  <div className="page">
  <Header/>
   <Main/>
   <Footer/>
   </div>  
  )
}

export default App
