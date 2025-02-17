import "./PhotoCard.scss";

function PhotoCard({photo, id}) {
  return (
    <div className="photo">
      <div className="photo__content">
        <img
          className="photo__image"
          src={photo.photo}
          alt={photo.photoDescription}
        />
        <div className="photo__photographer">{photo.photographer}</div>
      </div>

      <div className="photo__tags">
        <ul>
          {photo.tags.map((tag) => (
            <li className="photo__tag" tag={tag} key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PhotoCard;
