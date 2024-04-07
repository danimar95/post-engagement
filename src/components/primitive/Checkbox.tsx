import { CheckboxTypes } from "../../interfaces";

const Checkbox = ({
  checked,
  name,
}: CheckboxTypes) => {
  return (
    <input type="checkbox" checked={checked} name={name} className="checkbox" />
  );
};

export default Checkbox;
