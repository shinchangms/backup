// import { AxiosResponse, AxiosError } from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   axiosInstance,
//   setHeader,
// } from "configs/Request";
import { APIModel } from "@/api";
import { axiosInstance } from '../../../config/Request';
import { AxiosError } from 'axios';

interface RegisterDataType {
  full_name: string;
  email_id: string;
}

export const register = createAsyncThunk(
  'user/register',
  async ( data: RegisterDataType, thunkAPI ) => {
    const { url, method } = APIModel.REGISTER
    return axiosInstance( {
      url,
      method,
      data,
    } )
      .then( ( resp: any ) => {
        return resp.data;
      } )
      .catch( ( err: AxiosError ) => thunkAPI.rejectWithValue( err.toJSON() ) )
  },
);
