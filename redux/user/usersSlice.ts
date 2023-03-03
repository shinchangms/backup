import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface CounterState {
  userDetails: any;
}

const initialState: CounterState = {
  userDetails: [
    {
      id: 1,
      receiver: "Anne Morissette",
      net_amount: "1500",
      date: "05/01/2023",
      actions: "70",
      city: "Fort Carroll",
      country: "Uganda",
      email: "Brycen_Rice@hotmail.com",
      name: "Anne Morissette",
      phone: "9949-189-482",
      state: "Minnesota",
      street: "4597 Jermaine Divide",
      zipcode: "67826",
      product: [
        {
          _id: 1,
          product_name: "product_name 1",
          length: "15",
          width: "1",
          pick: "70",
          reed: "100",
          amount: "200",
          net_amount: "",
        },

        {
          _id: 2,
          product_name: "product_name 2",
          length: "25",
          width: "17",
          pick: "80",
          reed: "105",
          amount: "150",
        },
      ],
    },
    {
      id: 2,
      receiver: "Calvin",
      net_amount: "2000",
      date: "07/02/2023",
      actions: "50",
      name: "Calvin Xavier",
    },
    {
      id: 3,
      receiver: "Ann",
      net_amount: "900",
      date: "30/01/2023",
      actions: "160",
    },
  ],
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectUserDetails = (state: RootState) => state.user.userDetails;

export default usersSlice.reducer;
