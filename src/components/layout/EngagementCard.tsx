import Checkbox from "../primitive/Checkbox";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import Dropdown from "../primitive/Dropdown";

const EngagementCard = () => {
  const data = [
    "Factors",
    "Infrastructure",
    "Group",
    "Applications",
    "Tactics",
    "Interactions",
    "Brand",
    "Functionality",
    "Directives",
    "Communications",
  ];

  const Options = ["Edit", "Rename", "Delete"];

  return (
    <table className="w-11/12 bg-white rounded-xl">
      <tr className="flex justify-center items-center p-2 border-b border-neutral-300 h-fit text-sm">
        <th className="flex-initial flex items-center ">
          <Checkbox name="all" />
        </th>
        <th className="flex-1">Name</th>
        <th className="flex-1">Engaged /Unique</th>
        <th className="flex-1">Acquired</th>
        <th className="flex-1">Conversion</th>
        <th className="flex-1">Action</th>
      </tr>
      {data.map(() => (
        <tr className="flex justify-center items-center p-2 border-b border-neutral-300 text-black h-fit text-sm">
          <th className="flex-initial flex items-center font-medium">
            <Checkbox name="all" />
          </th>
          <th className="flex-1 flex items-center gap-4 pl-6 font-medium">
            {Math.floor(Math.random() * 2) === 0 ? (
              <FaFacebookMessenger />
            ) : (
              <FaInstagram />
            )}
            {data[Math.floor(Math.random() * data.length)]}
          </th>
          <th className="flex-1 font-medium">50 / 25</th>
          <th className="flex-1 font-medium">{(Math.random() * 100).toFixed()}</th>
          <th className="flex-1 font-medium">{`${(Math.random() * 100).toFixed()} %`}</th>
          <th className="flex-1 font-medium">
            <Dropdown text="Actions" options={Options} />
          </th>
        </tr>
      ))}
    </table>
  );
};

export default EngagementCard;
