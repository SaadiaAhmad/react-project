import Button from "./Button/Button";


function MultiComponents() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                <p className='title'>Multi Components</p>
                </div>
            </section>

            <Button>One</Button>
            <Button>Click me!!</Button>
            <Button>Buy Now</Button>
            <Button>Save</Button>
            <Button>Add to Cart</Button>
            <Button>Save to Wishlist</Button>
            <Button>Checkout</Button>
        </div>
    )
}

export default MultiComponents;