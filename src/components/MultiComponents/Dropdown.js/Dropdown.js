import { useState } from "react";
import { GoChevronDown, GoChevronLeft} from 'react-icons/go';

function Dropdown({ options, selectedOption, onSelectChange }) {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelectChange(option);
    }

    const renderedIcon = ( <span className="text-2xl">{isOpen ? <GoChevronDown></GoChevronDown> : <GoChevronLeft></GoChevronLeft> }</span>);

    const renderedItems = options.map((item, index) => {
        return (
            <div key={index} className="cursor-pointer hover:bg-sky-100 m-2" onClick={() => handleOptionClick(item)}>
                {<p className="border-b p-5">{item.label}</p>}
            </div>
        );
    });

    return (
        <div className="m-5">
            <h3 className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer hover:bg-gray-100" onClick={handleDropdownClick}>
                    {selectedOption?.label || 'Select...'}
                    {renderedIcon}
            </h3>
            <div className="border">
                {isOpen && renderedItems}
            </div>
        </div>
    )
}

export default Dropdown;