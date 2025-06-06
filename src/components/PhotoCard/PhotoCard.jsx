import "./PhotoCard.scss";
import { NavLink } from "react-router-dom";
import { VITE_PORT } from "../../utils";

function PhotoCard({ photo, id, panelisOpen }) {
  return (
    <div className={`photo ${panelisOpen ? "photo--openPanel" : ""}`}>
      <NavLink to={`/photos/${id}`} className={() => ""}>
        <div className="photo__content">
          <img
            className="photo__image"
            src={`http://localhost:${VITE_PORT}${photo.photo}`}
            alt={photo.photoDescription}
          />
          <div className="photo__photographer">{photo.photographer}</div>
        </div>

        <div className="photo__tags">
          <ul>
            {photo.tags.map((tag) => (
              <li className="photo__tag" tag={tag} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </NavLink>
    </div>
  );
}

export default PhotoCard;
