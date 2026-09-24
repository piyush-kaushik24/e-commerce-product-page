import { useEffect, useRef, useState } from "react";
import { iconCart, iconClose, iconMenu, imageAvatar, logo } from "../assets";
import { CartMenu } from "./CartMenu";
import { Menu } from "./MainMenu";

type HeaderProps = {
  cart: number | null;
  setCart: React.Dispatch<React.SetStateAction<number | null>>;
};
export const Header = ({ cart, setCart }: HeaderProps) => {
  const [menu, setMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (!cartRef.current?.contains(event.target as Node)) {
        setCartOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header
      ref={cartRef}
      className="border-grayish-blue relative flex justify-between px-4 md:border-b"
    >
      <span className="flex items-center gap-4 py-4 md:flex-row-reverse">
        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="relative z-20 md:hidden"
        >
          {menu ? (
            <img src={iconClose} alt="" />
          ) : (
            <img src={iconMenu} alt="sneakers" />
          )}
        </button>
        <Menu menu={menu} />

        <img src={logo} alt="" />
      </span>
      <span className="relative flex items-center gap-4">
        <button
          type="button"
          onClick={() => setCartOpen(!cartOpen)}
          className="relative hover:cursor-pointer"
        >
          <img src={iconCart} alt="" />
          {cart && (
            <span className="bg-orange absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full px-2 text-[10px] font-bold text-white">
              {cart}
            </span>
          )}
        </button>
        <button className="hover:cursor-pointer">
          <img
            src={imageAvatar}
            alt="Alex"
            className="hover:ring-orange w-6 rounded-full hover:ring-2 md:w-14"
          />
        </button>
      </span>
      {cartOpen && <CartMenu cart={cart} setcart={setCart} />}
    </header>
  );
};
