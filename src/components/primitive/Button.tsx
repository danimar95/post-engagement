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
      className={`btn btn-info border-0 font-medium disabled:text-black ${
        extraClass && extraClass
      }`}
      onClick={onChange}
    > 

      {children}
    </button>
  );
};

export default Button;
