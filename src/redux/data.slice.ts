import { createSlice } from "@reduxjs/toolkit";
import { DataProps } from "../interfaces";
import { faker } from '@faker-js/faker';
import uuid from "react-uuid";

const initialState: DataProps = {
  checked: [],
  engagementData: [],
  filteredData: [],
  isRenaming: false,
  currentItem: {
    name: "",
    engagement: "",
    acquired: 0,
    conversion: "",
    id: "",
    platform: "messenger",
  },
  dataCount : "10"
};
const todosSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.engagementData = action.payload;
      state.filteredData = action.payload;
    },
    removeItem: (state, action) => {
      state.filteredData = state.filteredData.filter(
        (data) => data.id !== action.payload
      );
    },
    addItem: (state, action) => {
      state.filteredData.unshift(action.payload);
    },
    setCurrentItem: (state, action) => {
      state.currentItem = action.payload;
    },
    setIsRenaming: (state, action) => {
      state.isRenaming = action.payload;
    },
    renameItem: (state, action) => {
      state.filteredData = state.filteredData.map((item) => {
        if (item.id === action.payload.id) {
          item.name = action.payload.name;
        }
        return item;
      });
    },
    toggleChecked: (state, action) => {
      const filterItems = state.checked.filter((i) => i !== action.payload);
      if (filterItems.length === state.checked.length) {
        state.checked = [...state.checked, action.payload];
      } else {
        state.checked = filterItems;
      }
    },
    toggleAll: (state) => {
      state.checked =
        state.filteredData.length === state.checked.length
          ? []
          : state.filteredData.map((i) => i.id);
    },
    deleteSelected: (state) => {
      state.filteredData = state.filteredData.filter(
        (data) => !state.checked.includes(data.id)
      );
      state.checked = [];
    },
    setFilteredData: (state, action) => {
      state.filteredData = state.engagementData.filter((item) =>
        item.name.toLowerCase().includes(action.payload)
      );
    },
    setDataCount: (state, action) => {
      state.dataCount = action.payload;
      state.checked = [];
      state.engagementData = Array(Number(state.dataCount)).fill(null).map(() => ({
        name: faker.company.name(),
        platform: faker.helpers.shuffle<"messenger"|"instagram">(["messenger", "instagram"])[0],
        engagement: `${faker.number.int({ min: 50, max: 100})} / ${faker.number.int({ min: 1, max: 25})}`,
        acquired: Number((Math.random() * 100).toFixed()),
        conversion: `${(Math.random() * 100).toFixed()} %`,
        id: uuid(),
      }));
      state.filteredData = state.engagementData;
    },
  },
});

export const {
  setData,
  removeItem,
  addItem,
  setIsRenaming,
  setCurrentItem,
  renameItem,
  toggleAll,
  toggleChecked,
  deleteSelected,
  setFilteredData,
  setDataCount,
} = todosSlice.actions;
export default todosSlice.reducer;
