import { InputProps } from "../../interfaces";
import { BsSearch } from "react-icons/bs";

const Input = ({
  placeholder,
  handleChange,
  searchTerm,
  extraClass,
  search = false,
  type = "text",
  id,
}: InputProps) => (
  <div className="relative w-full">
    <input
      id={id}
      className={`bg-transparent border-black border rounded-xl px-2 py-1 w-full ${search ? "pr-9" : ""} ${extraClass ? extraClass : ""}`}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      value={searchTerm}
    />
    {search && <BsSearch className="absolute top-2 right-2 text-black"/>}
  </div>
);

export default Input;
