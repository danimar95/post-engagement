import { PropsWithChildren } from "react";
import { FaAngleDown } from "react-icons/fa";
import { SelectProps } from "../../interfaces";

const Select = ({
  htmlFor,
  label,
  name,
  disabled = false,
  required,
  placeholder,
  extraClass,
  children,
  hasIcon,
  value,
  handeChange,
}: PropsWithChildren<SelectProps>) => {
  return (
    <label className="flex text-black rounded-3xl py-0.5 w-full bg-transparent" htmlFor={htmlFor} data-testid="select-label">
      <span className="" data-testid="select-caption">
        {label && <span className="">{label}</span>}
      </span>
      <span className="w-full" data-testid="select-wrapper">
        <select
          className={`btn bg-transparent border text-blue-950 hover:text-white py-2 px-4 min-h-fit h-fit ${extraClass ? extraClass : ""}`}
          name={name}
          id={htmlFor}
          disabled={disabled}
          required={required}
          onChange={handeChange}
          value={value}
        >
          <option value={placeholder} disabled className="text-black" defaultChecked>
            {placeholder}
            {hasIcon && <FaAngleDown />}
          </option>
          {children}
        </select>
      </span>
    </label>
  );
};

export default Select;
