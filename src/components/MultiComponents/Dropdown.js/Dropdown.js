import { useState } from "react";
import { GoChevronDown, GoChevronLeft} from 'react-icons/go';

function Dropdown({ items }) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ selectedItem, setSelecetedItem ] = useState('Select...');

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    }

    const handleItemClick = (value) => {
        setSelecetedItem(value);
        setIsOpen(false);
    }

    const renderedIcon = ( <span className="text-2xl">{isOpen ? <GoChevronDown></GoChevronDown> : <GoChevronLeft></GoChevronLeft> }</span>);

    const renderedItems = items.map((item, index) => {
        return (
            <div key={index} onClick={() => handleItemClick(item.label)}>
                {<p className="border-b p-5">{item.label}</p>}
            </div>
        );
    });

    return (
        <div className="m-5">
            <h3 className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={handleDropdownClick}>
                    {selectedItem}
                    {renderedIcon}
            </h3>
            <div className="border">
                {isOpen && renderedItems}
            </div>
        </div>
    )
}

export default Dropdown;