import './ImageItem.css';

function ImageItem(props) {
    return (
        <div className="image-item">
            <img src={props.imageSource} alt="searched image"></img>
        </div>
    );
}

export default ImageItem;