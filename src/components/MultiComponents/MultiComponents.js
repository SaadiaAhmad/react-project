import Button from "./Button/Button";
import { GoBell, GoCloudDownload, GoDatabase, GoGift, GoSmiley, GoZap, GoSquirrel } from 'react-icons/go';
import './MultiComponents.css';
import Accordion from "./Accordion/Accordion";

function MultiComponents() {
    const handleClick = () => {
        console.log('Button clicked')
    };

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
    ]

    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Multi Components</p>
                </div>
            </section>

            <div className="flex-container">
                <div className="flex-child">
                    <Button primary onClick={handleClick} className="mb-5">
                        <GoBell className="mr-1"></GoBell>
                        One
                    </Button>
                    <Button secondary onClick={handleClick}>
                        <GoCloudDownload className="mr-1"></GoCloudDownload>
                        Click me!!
                    </Button>
                    <Button success>
                        <GoDatabase className="mr-1"></GoDatabase>
                        Buy Now
                    </Button>
                    <Button warning>
                        <GoGift className="mr-1"></GoGift>
                        Save
                    </Button>
                    <Button danger>
                        <GoZap className="mr-1"></GoZap>
                        Add to Cart
                    </Button>
                    <Button danger rounded>
                        <GoSmiley className="mr-1"></GoSmiley>
                        Save to Wishlist
                    </Button>
                    <Button success outline>
                        <GoSquirrel className="mr-1"></GoSquirrel>
                        Checkout
                    </Button>
                </div>
                <div className="flex-child">
                    <Accordion items={accordionItems}></Accordion>
                </div>
            </div>


        </div>
    )
}

export default MultiComponents;