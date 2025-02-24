import "./SinglePhotoCard.scss";
import likePic from '../../assets/icons/Like_Outline.svg';


function SinglePhotoCard({photo}) {

    function formatTimestamp(ts) {
      const date = new Date(ts);
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const year = date.getFullYear();
      return `${month}/${day}/${year}`;
    }

    const formattedDate = formatTimestamp(photo.timestamp);


    return (
      <>
        <div className={`singlePhotoCard`}>
          <div className="singlePhotoCard__content">
            <img
              className="singlePhotoCard__image"
              src={photo.photo}
              alt={photo.photoDescription}
            />
          </div>
          <div className="singlePhotoCard__tags">
            <ul>
              {photo.tags.map((tag) => (
                <li className="singlePhotoCard__tag" tag={tag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="singlePhotoCard__info">
            <div className="likes">
              <div className="likes__img">
                <img src={likePic} alt="like icon" />
              </div>
              {` ${photo.likes} likes`}
            </div>
            <div className="date">{formattedDate}</div>
            <div className="photographer">
              <p>Photo by &nbsp; {photo.photographer}</p>
            </div>
          </div>
        </div>
      </>
    );

}

export default SinglePhotoCard;