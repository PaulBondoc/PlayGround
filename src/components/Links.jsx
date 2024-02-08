import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import LinksItem from "./LinksItem";

const Links = () => {
  const links = [
    {
      icon: FaGithub,
      link: "https://github.com/PaulBondoc",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/paul-jhon-bondoc-704a7327a",
    },
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/Pjbndc.01",
    },
  ];
  return (
    <div className="mt-2 flex gap-5">
      {links.map((item, index) => (
        <div key={index}>
          <LinksItem Icon={item.icon} link={item.link} />
        </div>
      ))}
    </div>
  );
};

export default Links;
