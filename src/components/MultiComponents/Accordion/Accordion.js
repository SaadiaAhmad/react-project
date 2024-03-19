import { GoChevronDown, GoChevronLeft} from 'react-icons/go';

function Accordion({ item, isExpanded, onClick }) {
    const renderedIcon = ( <span className="text-2xl">{isExpanded ? <GoChevronDown></GoChevronDown> : <GoChevronLeft></GoChevronLeft> }</span>);

    return (
        <div>
            <h3 className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={onClick}>
                {item.header}
                {renderedIcon}
            </h3>
            {isExpanded && <p className="border-b p-5 ">{item.content}</p>}
        </div>
    );
}

export default Accordion;