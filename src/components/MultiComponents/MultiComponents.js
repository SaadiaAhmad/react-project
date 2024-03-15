import Button from "./Button/Button";


function MultiComponents() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Multi Components</p>
                </div>
            </section>

            <Button primary>One</Button>
            <Button secondary>Click me!!</Button>
            <Button success>Buy Now</Button>
            <Button warning>Save</Button>
            <Button danger>Add to Cart</Button>
            <Button>Save to Wishlist</Button>
            <Button>Checkout</Button>
        </div>
    )
}

export default MultiComponents;