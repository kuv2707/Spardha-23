import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  numevents: 'loading...',
  pending: true,
  error: null,
};


export const getTeamData = async function (dispatch, getState) {
 dispatch({
        type: 'team/setLoading',
    });
  let payload={}
  try {
    const token = localStorage.getItem('token');
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { data } = await axios.get(`${baseUrl}teams/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    payload={ data, numevents: data.length }
  } catch (err) {
    console.log(err);
    payload={ data: null, numevents: 'error!' }
   
  }finally{
    dispatch({
      type: 'team/getTeams',
      payload 
    });
  }
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    getTeams: (state, action) => {
      state.data = action.payload.data;
      state.numevents = action.payload.numevents;
      state.pending = false;
    },
    setLoading:(state,action)=>{
        state.numevents="reloading..."
    }
  },
});

export const { getTeams } = teamSlice.actions;
export default teamSlice.reducer;
