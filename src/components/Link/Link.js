import UseNavigation from "../../hooks/use-navigation";

function Link({ to, children }) {
    const { navigate } = UseNavigation();

    const handleClick = (event) => {
        if(!(event.ctrlKey || event.metaKey)) event.preventDefault();
        navigate(to);
    }

    return (
        <a href={to} onClick={handleClick}>{ children }</a>
    )
}

export default Link;