export const Description = () => {
  return (
    <section className="*:py-4 md:*:py-7">
      <span className="text-dark-grayish-blue block font-semibold">
        SNEAKER COMPANY
      </span>
      <h1 className="text-3xl font-bold md:text-5xl">
        {" "}
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold"> $125.00</span>
          <span className="rounded-lg bg-black px-2 py-1 text-white"> 50%</span>
        </div>
        <del className="text-dark-grayish-blue font-semibold"> $250.00</del>
      </div>
    </section>
  );
};
