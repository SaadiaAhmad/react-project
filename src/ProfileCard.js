function ProfileCard(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <span>{props.handle}</span>
        </div>
    );
}

export default ProfileCard;