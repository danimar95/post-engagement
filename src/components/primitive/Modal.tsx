import { ModalProps } from "../../interfaces";

const Modal = ({
    id,
    header,
    content
}: ModalProps) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{header}</h3>
        <p className="py-4">{content}</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
