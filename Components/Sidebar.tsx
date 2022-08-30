import Image from "next/image";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";

const Sidebar = () => {
  return (
    <div>
      <Image
        className="mx-auto duration-300 ease-in rounded-xl lg:rounded-3xl hover:scale-105 bg-blend-multiply"
        src={"/assets/martins1.jpg"}
        width={600}
        height={600}
        alt="/"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider md:text-xl ">
        <span className="text-[#01d293]">Wasami </span>
        Martins
      </h3>
      <p className="px-2 py-1 my-3 bg-[#01d293] rounded-full">
        Front-End Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-[#01d293] rounded-full"
        href="/assets/skills/Wasami Martins Resume.pdf"
        download="Wasami Martins Resume.pdf"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* react icons */}
      <div className="flex items-center justify-between px-2 py-2 mx-auto">
        <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-900 hover:scale-105">
          <a
            href="https://www.linkedin.com/in/martins-wasami-9527a0234/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={20} color={"#01d293"} />
          </a>
        </div>
        <div className="p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-900 hover:scale-105">
          <a
            href="https://github.com/Nevomartini"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={20} color={"#01d293"} />
          </a>
        </div>

        <div className="p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-900 hover:scale-105">
          <a
            href="https://twitter.com/nevomhartini"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={20} color={"#01d293"} />
          </a>
        </div>
        <div className="p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow- shadow-gray-900 hover:scale-105">
          <a href="https://wa.me/07035043932" target="_blank" rel="noreferrer">
            <FaWhatsapp size={20} color={"#01d293"} />
          </a>
        </div>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-[#01d293]"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span className="font-bold">Nigeria</span>
        </div>
        <p className="my-2 ">Wasamimartins@gmail.com</p>
        <p className="my-2 ">07035043932/ 09166161258</p>
      </div>
      {/* Email button */}
      <button
        className="bg-gradient-to-r from-[#01d293] to-[#65a28f] text-[#fff] w-8/12 rounded-full py-2 px-5 my-2 md:w-full focus:outline-none  shadow-sm shadow-gray-900 uppercase"
        onClick={() => window.open("mailto: wasamimartins@gmail.com")}
      >
        Email me
      </button>
    </div>
  );
};

export default Sidebar;
