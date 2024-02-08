import Logo from "../assets/logo.svg";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
  return (
    <>
      <header className="p-3 xs:px-5 lg:px-10 xs:py-5 relative z-[10] flex items-center justify-between">
        <div className="flex items-center gap-[10px]">
          <img
            src={Logo}
            alt="Logo"
            loading="lazy"
            className="w-[35px] sm:w-[40px]"
          />
          <h6 className="text-primary text-[20px] sm:text-[22px] tracking-wide font-bold logo">
            PLAYGROUND
          </h6>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </header>
    </>
  );
};

export default Navbar;
