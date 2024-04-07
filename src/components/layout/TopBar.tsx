import Avatar from "../primitive/Avatar";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { PiMoonLight } from "react-icons/pi";
import { PiShieldWarning } from "react-icons/pi";

const TopBar = () => {
  return (
    <div className="navbar bg-white border-b border-neutral-300">
      <div className="flex-1">
        <Avatar />
        <a
          className="btn btn-ghost text-base ml-4"
          href="https://m.me/hitunezofficial"
          target="_blank"
        >
          @hitunexofficial
        </a>
      </div>
      <div className="flex-none flex">
        <div className="btn btn-ghost btn-circle">
          <PiShieldWarning size={25} />
        </div>
        <div className="btn btn-ghost btn-circle">
          <PiMoonLight size={25} />
        </div>
        <div className="btn btn-ghost btn-circle">
          <HiOutlineUserCircle size={25} />
        </div>
        <div className="dropdown dropdown-end ml-2">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
