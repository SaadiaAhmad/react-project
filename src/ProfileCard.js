function ProfileCard(props) {
    const { title, handle, image } = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{handle}</p>
            <img src={image} alt={title}></img>
        </div>
    );
}

export default ProfileCard;