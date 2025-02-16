import { useState } from 'react';
import photos from "./data/photos.json";

import './App.scss';
import Nav from './components/Nav/Nav';
import Gallery from './components/Gallery/Gallery';

import Header from './components/Header/Header';
import FilterPanel from './components/FilterPanel/FilterPanel';

function App() {
  const [panelisOpen, setPanelisOpen] = useState(false);
  const [clickedTag, setClickedTag] = useState(null);

  
  // const [count, setCount] = useState(0)

  return (
    <>
      <Nav
        panelState={panelisOpen}
        setter={setPanelisOpen}
        clickedTag={clickedTag}
        setClickedTag={setClickedTag}
      />
      {/* this div will fill the gap behond the nav bar  */}
      <div className="gap"></div>
      {panelisOpen ? (
        <FilterPanel clickedTag={clickedTag} setClickedTag={setClickedTag} />
      ) : null}
      <Header />
      <Gallery />
    </>
  );
}

export default App
