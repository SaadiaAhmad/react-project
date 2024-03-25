import Link from '../Link/Link';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className='side-navigation'>
            <Link to={'/'}>Home</Link>
            <Link to={'/personal-digital-assistant'}>Personal Digital Assistant</Link>
            <Link to={'/animals-show'}>Animals Show</Link>
            <Link to={'/picture-search-engine'}>Picture Search Engine</Link>
            <Link to={'/reading-list'}>Reading List</Link>
            <Link to={'/multi-components'}>Multi Components</Link>
        </div>
    )
}

export default Sidebar;