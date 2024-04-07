import { useEffect, useState } from "react";
import { faker } from '@faker-js/faker';
import Button from "./components/primitive/Button";
import Input from "./components/primitive/Input";
import Dropdown from "./components/primitive/Dropdown";
import TopBar from "./components/layout/TopBar";
import Drawer from "./components/layout/Drawer";
import EngagementCard from "./components/layout/EngagementCard";
import Modal from "./components/primitive/Modal";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import {
  deleteSelected,
  setDataCount,
  setFilteredData,
  setIsRenaming,
} from "./redux/data.slice";
import "./App.css";
import Select from "./components/primitive/Select";

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const checkedGroup = useAppSelector((state) => state.data.checked);
  const dataCount = useAppSelector((state) => state.data.dataCount);
  const countOptions = [
    { value: "2" },
    { value: "5" },
    { value: "10" },
    { value: "15" },
  ];

  const setCount = (count: string) => {
    setSearchTerm('');
    dispatch(setDataCount(count));
  }


  const deleteChecked = () => {
    dispatch(deleteSelected());
  };

  const handleSearchTerm = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    dispatch(setFilteredData(e.currentTarget.value.toLowerCase()));
  };

  useEffect(() => {
    dispatch(setIsRenaming(false));
  }, [dispatch]);

  return (
    <div className="h-full overflow-hidden">
      <TopBar />
      <div className="flex">
        <Drawer />
        <div className="flex flex-col justify-center items-center w-full h-full py-5">
          <div className="flex w-11/12 justify-between pb-4">
            <div className="w-2/12 text-black flex items-center font-medium">
              Post Engagements
            </div>
            <div className="flex gap-5 w-10/12 justify-end items-center">
              <Button
                extraClass="w-40 h-8 min-h-8"
                onChange={() => setIsOpen(true)}
              >
                Add +
              </Button>
              <div className="w-4/12">
                <Input
                  extraClass="flex-3 bg-white"
                  search
                  id="search"
                  placeholder="Search ..."
                  value={searchTerm}
                  name={searchTerm}
                  handleChange={(e) => handleSearchTerm(e)}
                />
              </div>
              <div>
                <Select
                  hasIcon
                  placeholder="Filter"
                  htmlFor="count"
                  label=""
                  name={dataCount}
                  value={dataCount}
                  handeChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCount(e.target.value)}
                >
                  {countOptions.map((option, index) => (
                    <option
                      key={`${option.value}-${index}`}
                      value={option.value}
                    >
                      {option.value}
                    </option>
                  ))}
                </Select>
              </div>
              <Dropdown hasIcon text="Bulk actions">
                <li>
                  <Button
                    extraClass="bg-white hover:bg-white"
                    disabled={Boolean(!checkedGroup.length)}
                    onChange={deleteChecked}
                  >
                    Delete
                  </Button>
                </li>
              </Dropdown>
            </div>
          </div>
          <EngagementCard setIsOpen={setIsOpen} />
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} id="modal" />
    </div>
  );
};

export default App;
