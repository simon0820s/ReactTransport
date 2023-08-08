import { useState } from "react";
import Button from "./Button";
import { HiLocationMarker, HiMenu, HiChevronUp } from "react-icons/hi";

const Nav = () => {
  const Links = [
    { name: "Inicio", link: "#inicio" },
    { name: "Nosotros", link: "#nosotros" },
    { name: "Somos", link: "#quienes_somos" },
    { name: "MV", link: "#mv" },
    { name: "Valores", link: "#valores" },
    { name: "Unete", link: "#trabaja_con_nosotros" },
  ];

  const [open, setOpen] = useState(false);

  const icon = open ? <HiChevronUp /> : <HiMenu />;

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-20">
      <div className="md:flex md:items-center md:justify-between bg-neutral-100 py-2 md:px-2 px-10 shadow-lg shadow-gray-400">
        <div
          className="md:flex-1 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <HiLocationMarker
              className="text-2xl mb-2"
              name="logo-ionic"
            ></HiLocationMarker>
          </span>
          Acarreos JH
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {icon}
        </div>

        <ul
          className={`md:flex-1 md:flex 2xl:justify-end gap-4 md:items-center absolute md:static bg-neutral-100 md:z-auto z-[-2] left-0 w-full px-4 md:px-2 lg:px-4 py-4 md:py-0 transition-all duration-150 ease-in ${open ? "top-12 " : "top-[-500px]"
            }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="text-lg py-2 md:py-0">
              <a
                onClick={() => setOpen(false)}
                href={link.link}
                className="text-gray-800 font-medium hover:text-purple-600 duration-500 cursor-pointer md:text-sm lg:text-xl"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Contactanos</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
