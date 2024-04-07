import { ButtonProps } from "../../interfaces";

const Button = ({
  onChange,
  children,
  disabled = false,
  extraClass,
  isSubmit,
}: ButtonProps) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      disabled={disabled}
      className={`btn btn-info text-white border-0 font-medium ${
        extraClass && extraClass
      }`}
      onClick={onChange}
    > 

      {children}
    </button>
  );
};

export default Button;
