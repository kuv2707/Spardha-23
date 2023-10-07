import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    num_of_boys: '-',
    num_of_girls: '-',
    college_rep: '-',
    leader_name: '-',
    leader_contact_num: '-',
    num_of_faculty_members: '-',
    num_of_coaches_pti: '-',
    num_of_supporting_staff: '-',
};
const token = localStorage.getItem('token');
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const cache = {};

export const getContingentDetail = createAsyncThunk(
  'contingent/getContingent',
  
  async () => {
    const cachedData = cache['contingentDetail'];
    if (cachedData) {
      return cachedData;
    }
    const { data } = await   axios.get(`${baseUrl}teams/contingent/details/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
    cache['contingentDetail'] = data;
    return data;
  }
);

export const contingentSlice = createSlice({
  name: 'contingent',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContingentDetail.fulfilled, (state, action) => {
        state.num_of_boys = action.payload.num_of_boys;
        state.num_of_girls = action.payload.num_of_girls;
        state.college_rep = action.payload.college_rep;
        state.leader_name = action.payload.leader_name;
        state.leader_contact_num = action.payload.leader_contact_num;
        state.num_of_faculty_members = action.payload.num_of_faculty_members;
        state.num_of_coaches_pti = action.payload.num_of_coaches_pti;
        state.num_of_supporting_staff = action.payload.num_of_supporting_staff;
        state.pending = false;
      })
      .addCase(getContingentDetail.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getContingentDetail.rejected, (state, action) => {
        state.error = action.error;
        state.pending = false;
      });
  },
});

export default contingentSlice.reducer;