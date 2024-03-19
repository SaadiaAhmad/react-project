import { useState } from "react";
import Accordian from '../Accordion/Accordion';

function AccordionList({ items }) {
    const [ expandedIndex, setExpandedIndex ] = useState(-1);

    const handleClick = (newIndex) => {
        setExpandedIndex(newIndex === expandedIndex ? -1 : newIndex);
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
            <Accordian item={item} key={index} isExpanded={isExpanded} onClick={() => handleClick(index)}></Accordian>
        );
    });

    return (
        <div className="m-5 border-x border-t rounded">
            {renderedItems} 
        </div>
    )
}

export default AccordionList;