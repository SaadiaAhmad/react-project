import { useContext } from "react";
import NavigationContext from "../../context/navigation";

function Route({ path, children }) {
    const { currentPath } = useContext(NavigationContext);

    console.log(path, currentPath, path === currentPath);

    if(path === currentPath) return children;

    return null;
}

export default Route;