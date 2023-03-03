import { createSlice } from "@reduxjs/toolkit";

const initialList = [
  {
    id: 1,
    name: "Aubrie",
    length: "15",
    width: "1",
    pick: "70",
    reed: "100",
  },
  {
    id: 2,
    name: "Lurleen",
    length: "25",
    width: "17",
    pick: "80",
    reed: "105",
  },
];

export const productSlice = createSlice({
  name: "products",
  initialList,
  reducers: {},
});

export default productSlice.reducer;
