import "./App.css";
import Button from "./components/primitive/Button";
import Input from "./components/primitive/Input";
import Modal from "./components/primitive/Modal";
import Dropdown from "./components/primitive/Dropdown";
import TopBar from "./components/layout/TopBar";
import Drawer from "./components/layout/Drawer";
import EngagementCard from "./components/layout/EngagementCard";

const App = () => {
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
            <div className="flex gap-5 w-10/12 justify-end">
              <Button
                extraClass="w-40 h-8 min-h-8"
                onChange={() => console.log("adding")}
              >
                Add +
              </Button>
              <div className="w-4/12">
                <Input
                  extraClass="flex-3 bg-white"
                  search
                  id="search"
                  placeholder="Search ..."
                  searchTerm=""
                />
              </div>
              <Dropdown
                hasIcon
                text="Filter"
                options={["10", "25", "50", "100"]}
              />
              <Dropdown
                hasIcon
                text="Bulk actions"
                options={["Delete"]}
              />
            </div>
          </div>
          <EngagementCard />
        </div>
      </div>
    </div>
  );
};

export default App;
