// import { AxiosResponse, AxiosError } from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   axiosInstance,
//   setHeader,
// } from "configs/Request";
import { APIModel } from "@/api";
import { axiosInstance } from '../../../config/Request';
import { AxiosError } from 'axios';

interface CreateprojectDataType {
  name: string;
  description: string;
}

export const Createproject = createAsyncThunk(
  'project/createproject',
  async (data: CreateprojectDataType, thunkAPI) => {
    const { url, method } = APIModel.LIST
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
