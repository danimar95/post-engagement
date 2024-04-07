import { ChangeEvent } from "react";
import { CheckboxTypes } from "../../interfaces";

const Checkbox = ({
  checked,
  name,
  onChange
}: CheckboxTypes) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  }

  return (
    <input type="checkbox" checked={checked} name={name} className="checkbox" onChange={handleChange} />
  );
};

export default Checkbox;
