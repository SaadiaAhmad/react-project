import Link from '../Link/Link';
import './Sidebar.css';

function Sidebar() {
    const links = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Personal Digital Assistant',
            path: '/personal-digital-assistant'
        },
        {
            label: 'Animals Show',
            path: '/animals-show'
        },
        {
            label: 'Picture Search Engine',
            path: '/picture-search-engine'
        },
        {
            label: 'Reading List',
            path: '/reading-list'
        },
        {
            label: 'Multi Components',
            path: '/multi-components'
        },
        {
            label: 'Table',
            path: '/table'
        }
    ];

    const renderedLinks = links.map((link) => <Link to={link.path} key={link.path}>{link.label}</Link>)

    return (
        <div className='side-navigation'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar;