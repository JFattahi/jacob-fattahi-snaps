import "./PhotoDetailsPage.scss";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { VITE_BASE_URL } from "../../utils";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import SinglePhotoCard from "../../components/SinglePhotoCard/SinglePhotoCard";
import Comments from "../../components/Comments/Comments";
import arrow from "../../assets/icons/Arrow.svg";
import axios from "axios";

function PhotoDetailsPage() {
  // id of a single picture
  const { id } = useParams();
  // a single photo is an object
  const [photo, setPhoto] = useState({});
  // commetns is an array of objects {name, comment, id, timeStamp}
  const [comments, setComments] = useState([]);

  // get tag list from API
  async function getPhotoinfo() {
    try {
      //   get a single photo by its id
      const photoResponse = await axios.get(
        `${VITE_BASE_URL}/photos/${id}`
      );
      setPhoto(photoResponse.data);

      //   get the array of comments for that photo
      getComments();
    } catch (error) {
      console.log(error);
    }
  }

  async function getComments() {
    try {
      const commentsResponse = await axios.get(
        `${VITE_BASE_URL}/photos/${id}/comments`
      );
      setComments(commentsResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPhotoinfo();
  }, [id]);

  if (Object.keys(photo).length === 0)
    return <h1 className="loading">Loading...</h1>;
  return (
    <>
      <nav className="nav">
        <NavLink to={`/`} className={() => ""}>
          <h3 className="nav__title">Snaps</h3>
        </NavLink>
        <NavLink to={`/`} className={() => ""}>
          <div className="nav__return-btn">
            <div className="return-btn__arrow">
              <img src={arrow} alt="arrow icon" />
            </div>
            <h4 className="return-btn__home-label">Home</h4>
          </div>
        </NavLink>
      </nav>
      <div className="gap"></div>
      {/* ---------------------------------- main ------------------------ */}
      <main className="main">
        <SinglePhotoCard photo={photo} />
        <Form id={id} getComments={getComments} />
        <Comments comments={comments} />
      </main>
      <Footer />
    </>
  );
}

export default PhotoDetailsPage;
