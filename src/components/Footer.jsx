import ReactIcon from "../assets/icons/react.png";
import TailwindCSSIcon from "../assets/icons/tailwind.png";
import Links from "./Links";
const Footer = () => {
  const icons = [ReactIcon, TailwindCSSIcon];
  return (
    <>
      <footer className="bg-background shadow-card py-10 px-5 xs:px-10">
        <div className="flex flex-col items-center gap-[10px]">
          <div className="flex items-center gap-3">
            <p className="text-primary font-extrabold tracking-wide text-[13px] xs:text-[15px]">
              Copyright &copy; 2024
              <span className="tracking-wider"> PLAYGROUND</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-[13px] xs:text-[15px] font-semibold">
            Created with
            {icons.map((item, index) => (
              <img key={index} src={item} className="w-[25px]" loading="lazy" />
            ))}
            By Paul Bondoc
          </div>
          <Links />
        </div>
      </footer>
    </>
  );
};

export default Footer;
