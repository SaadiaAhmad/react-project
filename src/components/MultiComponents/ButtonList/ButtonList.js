import Button from "../Button/Button";
import {
  GoBell,
  GoCloudDownload,
  GoDatabase,
  GoGift,
  GoSmiley,
  GoZap,
  GoSquirrel,
} from "react-icons/go";

function ButtonList() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
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
  );
}

export default ButtonList;
