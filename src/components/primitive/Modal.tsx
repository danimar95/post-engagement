import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { ModalProps, PlatformProps } from "../../interfaces";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addItem, renameItem, setIsRenaming } from "../../redux/data.slice";

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  const isRenaming = useAppSelector((state) => state.data.isRenaming);
  const currentItem = useAppSelector((state) => state.data.currentItem);
  const [name, setName] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const dispatch = useAppDispatch();
  const platforms: PlatformProps[] = [
    { value: "messenger", label: "Messenger" },
    { value: "instagram", label: "Instagram" },
  ];

  const handleSave = () => {
    if (isRenaming) {
      dispatch(renameItem({ name: name, id: currentItem.id }));
      setIsOpen(false);
    } else {
      dispatch(
        addItem({
          name: name,
          platform: platform,
          engagement: "50 / 25",
          acquired: (Math.random() * 100).toFixed(),
          conversion: `${(Math.random() * 100).toFixed()} %`,
          id: uuid(),
        })
      );
      setIsOpen(false);
      setName("");
    }
    dispatch(setIsRenaming(false));
  };
  
  const handleClose = () => {
    setIsOpen(false);
    dispatch(setIsRenaming(false));
    setName("");
  }

  useEffect(() => {
    if (isRenaming) setName(currentItem.name)
    else setName("");
  }, [currentItem]);

  return (
    <>
      {isOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-3/6">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <div className="text-3xl font-semibold">{`${
                    isRenaming ? "Rename" : "Add"
                  } item`}</div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black 4 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleClose}
                  >
                    <IoMdClose />
                  </button>
                </div>
                <div className="relative p-6 flex gap-2">
                  <div
                    className={`${
                      isRenaming ? "w-full" : "w-9/12"
                    } text-black flex items-center`}
                  >
                    <Input
                      id="item-name"
                      placeholder="Item..."
                      value={name}
                      name={name}
                      handleChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {!isRenaming && (
                    <div className="w-3/12">
                      <Select
                        hasIcon
                        placeholder="Platform"
                        extraClass="flex justify-center"
                        label=""
                        htmlFor="platform"
                        name={platform}
                        handeChange={(e: React.FormEvent<HTMLInputElement>) =>
                          setPlatform(e.currentTarget.value)
                        }
                      >
                        {platforms.map((platform, index) => (
                          <option
                            key={`${platform.label}-${index}`}
                            value={platform.value}
                          >
                            {platform.label}
                          </option>
                        ))}
                      </Select>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-black background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <Button onChange={handleSave} disabled={name.length === 0} extraClass={`${name.length === 0 ? "text-black": ""}`}>Save Changes</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
