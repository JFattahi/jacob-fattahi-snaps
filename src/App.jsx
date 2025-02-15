import { useState } from 'react';
import photos from "./data/photos.json";

import './App.scss';
import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';

import Header from './components/Header/Header';
import FilterPanel from './components/FilterPanel/FilterPanel';

function App() {
  const [panelisOpen, setPanelisOpen] = useState(false);

  console.log("from App.jsx");
  console.log(panelisOpen);
  console.log(setPanelisOpen);
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav panelState={panelisOpen} setter={setPanelisOpen} />
      {panelisOpen ? <FilterPanel /> : null }
      <Header /> 
      <Gallery />
    </>
  )
}

export default App
