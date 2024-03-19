import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function Accordion({ items }) {
    const [ expandedIndex, setExpandedIndex ] = useState(-1);

    const handleClick = (newIndex) => {
        setExpandedIndex(newIndex === expandedIndex ? -1 : newIndex);
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        const renderedIcon = ( <span className="text-2xl">{isExpanded ? <GoChevronDown></GoChevronDown> : <GoChevronLeft></GoChevronLeft> }</span>);

        return (
            <div key={index}>
                <h3 className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.header}
                    {renderedIcon}
                </h3>
                {isExpanded && <p className="border-b p-5 ">{item.content}</p>}
            </div>
        );
    });

    return (
        <div className="m-5 border-x border-t rounded">
            {renderedItems} 
        </div>
    )
}

export default Accordion;