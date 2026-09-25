import { iconCart, iconMinus, iconPlus } from "../assets";
type CartProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setCart: React.Dispatch<React.SetStateAction<number | null>>;
};

export const Cart = ({ quantity, setQuantity, setCart }: CartProps) => {
  return (
    <section className="pt-4 pb-6 md:flex md:items-center md:gap-8">
      <div className="bg-light-grayish-blue flex justify-between rounded-lg p-4 md:w-1/2">
        <button
          type="button"
          aria-label="Decrease quantity."
          onClick={() => {
            if (quantity >= 1) {
              setQuantity(quantity - 1);
            }
          }}
          className="hover:cursor-pointer hover:opacity-80"
        >
          <img src={iconMinus} alt="" />
        </button>
        <span className="font-bold">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity."
          onClick={() => setQuantity(quantity + 1)}
          className="hover:cursor-pointer hover:opacity-80"
        >
          <img src={iconPlus} alt="" />
        </button>
      </div>
      <button
        type="button"
        disabled={quantity < 1}
        onClick={() => {
          setCart(quantity);
        }}
        className="bg-orange mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-4 shadow-[0_8px_10px_hsl(26_100%_55%/50%)] hover:cursor-pointer hover:opacity-80 md:mt-0 md:w-3/4 md:shadow-none"
      >
        <img src={iconCart} alt="" />
        <span className="font-bold">Add to cart</span>
      </button>
    </section>
  );
};
