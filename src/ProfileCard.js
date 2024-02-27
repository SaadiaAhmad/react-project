function ProfileCard(props) {
    const { title, handle } = props;
    return (
        <div>
            <h2>{title}</h2>
            <span>{handle}</span>
        </div>
    );
}

export default ProfileCard;