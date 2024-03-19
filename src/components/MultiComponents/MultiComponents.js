import './MultiComponents.css';
import Dropdown from "./Dropdown.js/Dropdown";
import ButtonList from "./ButtonList/ButtonList";
import Accordion from './Accordion/Accordion';

function MultiComponents() {
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

    const dropdownItems = [
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

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Multi Components</p>
                </div>
            </section>

            <div className="flex-container">
                <div className="flex-child">
                    <ButtonList></ButtonList>
                </div>
                <div className="flex-child">
                    <Accordion items={accordionItems}></Accordion>
                    <Dropdown items={dropdownItems}></Dropdown>
                </div>
            </div>


        </div>
    )
}

export default MultiComponents;