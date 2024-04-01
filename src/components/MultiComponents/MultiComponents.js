import './MultiComponents.css';
import Dropdown from "./Dropdown.js/Dropdown";
import ButtonList from "./ButtonList/ButtonList";
import Accordion from './Accordion/Accordion';
import { useState } from "react";
import Modal from './Modal/Modal';
import Button from './Button/Button';

function MultiComponents() {
    const [ selectedOption, setSelecetedOption ] = useState(null);
    const [ showModal, setShowModal ] = useState(false);

    const accordionItems = [
        {
            header: 'What day is today?',
            content: 'It is only Monday'
        },
        {
            header: 'Is it Friday yet?',
            content: 'Yes, it is'
        },
        {
            header: 'Weekend is here?',
            content: 'Yayyy'
        }
    ];

    const dropdownOptions = [
        {
            label: 'First item',
            value: 'first'
        },
        {
            label: 'Second item',
            value: 'second'
        },
        {
            label: 'Third item',
            value: 'third'
        }
    ];

    const handleSelectChange = (option) => {
        setSelecetedOption(option);
    }

    const handleModalOpenClick = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Multi Components</p>
                </div>
            </section>

            <div className="flex-container">
                <div className="flex-child">
                    <h2 className='child-title'>Button List</h2>
                    <ButtonList></ButtonList>
                </div>
                <div className="flex-child">
                    <h2 className='child-title'>Accordion</h2>
                    <Accordion items={accordionItems}></Accordion>
                </div>
                <div className='flex-child'>
                    <h2 className='child-title'>Dropdown</h2>
                    <Dropdown options={dropdownOptions} selectedOption={selectedOption} onSelectChange={(val) => handleSelectChange(val)}></Dropdown>
                </div>
                <div className='flex-child'>
                    <h2 className='child-title'>Modal</h2>
                    <div className='modal-div'>
                        <Button primary onClick={handleModalOpenClick}>Open Modal</Button>
                        { showModal && <Modal onClose={handleModalClose}></Modal>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MultiComponents;