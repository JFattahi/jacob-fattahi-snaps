import { useState } from 'react';
import tags from "./data/tags.json";
import photos from "./data/photos.json";

import './App.scss';
import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';

import Header from './components/Header/Header';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* -------------------------------- nav bar ------------------------------------------- */}
      <Nav />
      {/* ------------------------------- Header --------------- */}
      <Header /> 
      <Gallery />
    </>
  )
}

export default App
