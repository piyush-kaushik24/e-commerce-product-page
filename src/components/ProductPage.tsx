import { useState } from "react";
import { Cart } from "./Cart";
import { Description } from "./Description";
import { Header } from "./Header";
import { ImageView } from "./ImageView";

export const ProductPage = () => {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState<number | null>(null);

  return (
    <div className="md:px-8">
      <Header cart={cart} setCart={setCart} />

      <main className="md:mt-20 md:grid md:grid-cols-2 md:gap-20">
        <ImageView />
        <div className="place-self-center px-4">
          <Description />
          <Cart
            quantity={quantity}
            setQuantity={setQuantity}
            setCart={setCart}
          />
        </div>
      </main>
    </div>
  );
};
