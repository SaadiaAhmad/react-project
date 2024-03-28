import UseNavigation from "../../hooks/use-navigation";

function Link({ to, children }) {
    const { currentPath, navigate } = UseNavigation();

    const handleClick = (event) => {
        if(!(event.ctrlKey || event.metaKey)) event.preventDefault();
        navigate(to);
    }

    return (
        <a href={to} style={to === currentPath ? { fontWeight: 900, backgroundColor: "azure", borderLeft: '5px solid #485fc7' } : {}} onClick={handleClick}>{ children }</a>
    )
}

export default Link;