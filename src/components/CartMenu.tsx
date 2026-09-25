import { iconDelete, imageProduct1Thumbnail } from "../assets";

type CartMenuProps = {
  cart: number | null;
  setcart: React.Dispatch<React.SetStateAction<number | null>>;
};
export const CartMenu = ({ cart, setcart }: CartMenuProps) => {
  const cartTotal = cart ? cart * 125.00 : null;

  return (
    <div className="shadow-very-dark-blue absolute top-15 left-1/2 z-30 w-[95%] -translate-x-1/2 rounded-xl bg-white shadow-2xl md:top-25 md:-right-30 md:left-auto md:w-80">
      <span className="border-grayish-blue block border-b p-4 font-semibold">
        Cart
      </span>
      <span className="text-dark-grayish-blue flex h-40 flex-col items-center justify-center gap-6 p-4 font-semibold">
        {cart ? (
          <div className="space-y-6">
            <span className="flex items-center gap-6">
              <img
                src={imageProduct1Thumbnail}
                alt="product"
                className="w-10 rounded-lg"
              />
              <span className="flex flex-col">
                <span>Fall Limited Edition Sneakers</span>
                <span className="flex gap-2">
                  <span>$125.00 x {cart}</span>
                  <span className="font-bold text-black">${cartTotal}</span>
                </span>
              </span>
              <button type="button" aria-label="Item Deleted." onClick={() => setcart(null)}>
                <img src={iconDelete} alt="" />
              </button>
            </span>
            <button type="button" className="bg-orange w-full rounded-lg py-4 font-bold text-black">
              Checkout
            </button>
          </div>
        ) : (
          <span className="">Your cart is empty.</span>
        )}
      </span>
    </div>
  );
};
