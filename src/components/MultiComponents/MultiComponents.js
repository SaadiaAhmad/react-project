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

    const modal = <Modal onClose={handleModalClose} actionBar={<Button primary onClick={handleModalClose}>I Accept</Button>}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare aliquam interdum. Cras malesuada tincidunt nisl, 
            quis iaculis risus vehicula non. Aliquam volutpat nunc justo, facilisis bibendum nibh ornare ac. Sed ornare suscipit mauris ut ultrices. 
            Duis in orci nisl. Quisque at mattis ipsum, a commodo est. Mauris vitae quam vel nisi dictum iaculis. Vestibulum ante ipsum primis in faucibus 
            orci luctus et ultrices posuere cubilia curae;
        <br></br>
        <br></br>
            Cras pulvinar augue a efficitur gravida. Suspendisse vel ex ac arcu finibus semper non ac ligula. Quisque mauris nulla, convallis at imperdiet eget, 
            faucibus nec ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sagittis risus non orci tempor dictum. Suspendisse vel nisi odio. 
            Sed id ipsum nec arcu fringilla consequat. Fusce lobortis auctor placerat. Nullam nunc erat, luctus ac pharetra vitae, lobortis sit amet neque.
        </p>
    </Modal>

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
                        { showModal && modal}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default MultiComponents;