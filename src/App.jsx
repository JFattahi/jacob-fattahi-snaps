import { useState } from 'react';
import photos from "./data/photos.json";

import './App.scss';
import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';

import Header from './components/Header/Header';
import FilterPanel from './components/FilterPanel/FilterPanel';

function App() {
  const [panelIsOpen, setPanelIsOpen] = useState(false);
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      {panelIsOpen ? <FilterPanel /> : null }
      <Header /> 
      <Gallery />
    </>
  )
}

export default App
