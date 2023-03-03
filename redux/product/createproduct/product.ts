// import { AxiosResponse, AxiosError } from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   axiosInstance,
//   setHeader,
// } from "configs/Request";
import { APIModel } from "../../../@/api";
import { axiosInstance } from '../../../config/Request';
import { AxiosError } from 'axios';

interface CreateproductDataType {
  name: string;
  description: string;
  height: string;
  width: string;
  pick: string;
  reed: string;
}

export const Createproduct = createAsyncThunk(
  'product/createproduct',
  async (data: CreateproductDataType, thunkAPI) => {
    const { url, method } = APIModel.CREATE_PRODUCT
    return axiosInstance({
      url,
      method,
      data,
    })
      .then((resp: any) => {
        return resp.data;
      })
      .catch((err: AxiosError) => thunkAPI.rejectWithValue(err.toJSON()))
  },
);
