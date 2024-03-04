import ImageItem from "./ImageItem";
import './ImageList.css';

function ImageList(props) {
    const renderedImages = props.imageList.map((image) => <ImageItem image={image} key={image.id}></ImageItem>);

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    );
}

export default ImageList;