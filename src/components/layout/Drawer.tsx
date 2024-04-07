import { BsClock } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { BsChatDots } from "react-icons/bs";
import { BsFillMagnetFill } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import { BsMagic } from "react-icons/bs";
import { BsFileEarmark } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

const Drawer = () => {
  return (
    <ul className="menu border-r border-neutral-300 min-h-screen bg-white w-16">
      <li>
        <a className="py-4 flex justify-center" href="/">
          <BsClock size={20} />
        </a>
      </li>
      <li>
        <a className="py-4 flex justify-center" href="/">
          <BsPeopleFill size={20} />
        </a>
      </li>
      <li>
        <a className="py-4 flex justify-center" href="/">
          <BsChatDots size={20} />
        </a>
      </li>
      <li>
        <a className="py-4 flex justify-center" href="/">
          <BsFillMagnetFill size={20} />
        </a>
      </li>
      <li>
        <a className="py-4 flex justify-center" href="/">
          <BsBroadcast size={20} />
        </a>
      </li>
      <li>
        <a className="py-4 flex justify-center" href="/">
          <BsMagic size={20} />
        </a>
      </li>
      <li>
        <a className="py-4 flex justify-center" href="/">
          <BsFileEarmark />
        </a>
      </li>
      <li>
        <a className="py-4 flex justify-center" href="/">
          <BsBarChart size={20} />
        </a>
      </li>
      <li>
        <a className="py-4 flex justify-center" href="/">
          <IoSettingsOutline size={20} />
        </a>
      </li>
    </ul>
  );
};

export default Drawer;
