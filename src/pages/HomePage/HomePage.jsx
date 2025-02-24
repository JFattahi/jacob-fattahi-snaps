
import './HomePage.scss';
import { useState } from "react";

import Nav from "../../components/Nav/Nav";
import Header from "../../components/Header/Header";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import Footer from "../../components/Footer/Footer";

function HomePage( {photosArray} ) {
  const [panelisOpen, setPanelisOpen] = useState(false);
  const [clickedTag, setClickedTag] = useState(null);
  const filteredPhotos = clickedTag
    ? photosArray.filter((photo) => photo.tags.includes(clickedTag))
    : photosArray;

  return (
    <>
      <Nav panelState={panelisOpen} setter={setPanelisOpen} />
      {/* this div will fill the gap behind the nav bar  */}
      <div className="gap"></div>
      <div className="outer-wrap">
        {panelisOpen ? (
          <FilterPanel clickedTag={clickedTag} setClickedTag={setClickedTag} />
        ) : null}
        <div className={`content ${panelisOpen ? "content--open-panel" : ""}`}>
          <Header />
          <div className="photo-list ">
            {filteredPhotos.map((photo) => {
              return (
                <PhotoCard
                  className="photo-card"
                  photo={photo}
                  key={photo.id}
                  id={photo.id}
                  panelisOpen={panelisOpen}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
