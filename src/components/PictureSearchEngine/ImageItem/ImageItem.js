import "./ImageItem.css";

function ImageItem(props) {
  return (
    <div className="image-item">
      <img
        src={props.image.urls.regular}
        alt={props.image.alt_description}
      ></img>
    </div>
  );
}

export default ImageItem;
