import { useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import Checkbox from "../primitive/Checkbox";
import Dropdown from "../primitive/Dropdown";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeItem,
  setCurrentItem,
  setIsRenaming,
  toggleChecked,
  toggleAll,
  setDataCount,
} from "../../redux/data.slice";
import { EngagementCardProps } from "../../interfaces";

const EngagementCard = ({ setIsOpen }: EngagementCardProps) => {
  const dispatch = useAppDispatch();
  const engagementData = useAppSelector((state) => state.data.engagementData);
  const filteredData = useAppSelector((state) => state.data.filteredData);
  const checked = useAppSelector((state) => state.data.checked);

  const handleDelete = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleRename = (id: string) => {
    dispatch(setIsRenaming(true));
    const itemToDelete = engagementData.filter((item) => item.id === id);
    dispatch(setCurrentItem(itemToDelete[0]));
    setIsOpen(true);
  };

  const Options = [
    {
      name: "Edit",
      action: () =>
        console.log("This is a functionality that wasn't handled on this test"),
    },
    { name: "Rename", action: (id: string) => handleRename(id) },
    { name: "Delete", action: (id: string) => handleDelete(id) },
  ];

  const toggleCheck = (id: string): void => {
    dispatch(toggleChecked(id));
  };

  const toggleAllCheckboxes = (): void => {
    dispatch(toggleAll());
  };

  useEffect(() => {
    dispatch(setDataCount("5"));
  }, [dispatch]);

  return (
    <table className="w-11/12 bg-white rounded-xl">
      <tbody>
        <tr className="flex justify-center items-center p-2 border-b border-neutral-300 h-fit text-sm">
          <th className="flex-initial flex items-center ">
            <Checkbox
              name="all"
              checked={Boolean(
                engagementData.length &&
                  checked.length === engagementData.length
              )}
              onChange={toggleAllCheckboxes}
            />
          </th>
          <th className="flex-1">Name</th>
          <th className="flex-1">Engaged /Unique</th>
          <th className="flex-1">Acquired</th>
          <th className="flex-1">Conversion</th>
          <th className="flex-1">Action</th>
        </tr>
        {filteredData.map((item, index) => (
          <tr
            className="flex justify-center items-center p-2 border-b border-neutral-300 text-black h-fit text-sm"
            key={`${item.id}-${index}`}
          >
            <th className="flex-initial flex items-center font-medium">
              <Checkbox
                name="all"
                checked={checked.includes(item.id)}
                onChange={() => toggleCheck(item.id)}
              />
            </th>
            <th className="flex-1 flex items-center gap-4 pl-6 font-medium text-left">
              {item.platform === "messenger" ? (
                <FaFacebookMessenger />
              ) : (
                <FaInstagram />
              )}
              {item.name}
            </th>
            <th className="flex-1 font-medium text-black">{item.engagement}</th>
            <th className="flex-1 font-medium">{item.acquired}</th>
            <th className="flex-1 font-medium">{item.conversion}</th>
            <th className="flex-1 font-medium">
              <Dropdown text="Actions">
                {Options.map((option, index) => (
                  <li key={`${option}-${index}`}>
                    <a onClick={() => option.action(item.id)}>{option.name}</a>
                  </li>
                ))}
              </Dropdown>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EngagementCard;
