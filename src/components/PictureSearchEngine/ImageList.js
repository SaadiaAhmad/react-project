import ImageItem from "./ImageItem";
import './ImageList.css';

function ImageList(props) {
    const renderedImages = props.imageList.map((image) => <ImageItem imageSource={image.urls.regular} key={image.id}></ImageItem>);

    return (
        <div className="image-list">
            {renderedImages}
        </div>
    );
}

export default ImageList;