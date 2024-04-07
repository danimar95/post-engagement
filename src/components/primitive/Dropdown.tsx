import { DropdownProps } from "../../interfaces";
import { FaAngleDown } from "react-icons/fa";

const Dropdown = ({ hasIcon, text, options, extraClass }: DropdownProps) => {
  return (
    <div className={`dropdown ${extraClass ? extraClass : ""}`}>
      <div
        tabIndex={0}
        role="button"
        className="btn bg-transparent border text-blue-950 hover:text-white p-2 min-h-fit h-fit"
      >
        {text}
        {hasIcon && <FaAngleDown />}
      </div>
      <ul
        tabIndex={0}
        className="p-2 shadow menu dropdown-content z-[1] bg-white text-blue-950 rounded-box py-0"
      >
        {options.map((option) => (
          <li>
            <a>{option}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
