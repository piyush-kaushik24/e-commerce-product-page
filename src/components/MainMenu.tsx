type MenuProps = {
  menu: boolean;
};
export const Menu = ({ menu }: MenuProps) => {
  const nav = ["Collection", "Men", "Women", "About", "Contact"];
  return (
    <div>
      <nav
        className={`${menu ? "absolute top-0 left-0 z-10 h-screen w-3/4 bg-white px-4 py-16" : "hidden md:flex"} `}
      >
        <ul className="md:flex md:gap-4">
          {" "}
          {nav.map((navLinks) => (
            <li key={navLinks} className="p-4 text-lg text-dark-grayish-blue hover:text-very-dark-blue font-semibold">
              <a
                href="#"
                className="hover:shadow-[0_4px_0_0_hsl(26_100%_55%)] md:pb-8"
              >
                {navLinks}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {menu && <div className="fixed inset-0 z-0 bg-black/25"></div>}
    </div>
  );
};
