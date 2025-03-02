import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import PhotoDetailsPage from "./pages/PhotoDetailsPage/PhotoDetailsPage";

import { VITE_BASE_URL, API_KEY } from "./utils";
import axios from "axios";

function App() {
  const [photosArray, setPhotosArray] = useState([]);

  // this function gets the photos array from the API
  async function getPhotosArray() {
    try {
      const { data } = await axios.get(
        `${VITE_BASE_URL}/photos?api_key=${API_KEY}`
      );
      setPhotosArray(data);
    } catch (error) {
      console.log(error);
    }
  }

  // get the photos array on page mount
  useEffect(() => {
    getPhotosArray();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage photosArray={photosArray} />}
          ></Route>
          <Route
            path="/photoDetails/:id"
            element={<PhotoDetailsPage />}
          ></Route>
          <Route path="*" element={<h1>404 Page Not Found! </h1>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
