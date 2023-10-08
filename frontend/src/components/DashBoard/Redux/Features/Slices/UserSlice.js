import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: {
    designation: 'loading...',
    email: 'loading...',
    institution: 'loading...',
    name: 'loading...',
    phone: 'loading...',
    username: 'loading...',
  },
  pending: true,
  error: null,
};

export const getUserData = async function (dispatch, getState) {
  let payload = {};
  try {
    const token = localStorage.getItem('token');
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const { data } = await axios.get(`${baseUrl}auth/update/`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    console.log(data);
    payload = { data };
  } catch (err) {
    console.log(err);
    payload = { data: initialState.data };
  } finally {
    dispatch({
      type: 'user/getUserInfo',
      payload,
    });
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUserInfo: (state, action) => {
      state.data = action.payload.data;
      state.numevents = action.payload.numevents;
      state.pending = false;
    },
    setLoading: (state, action) => {
      state.pending = true;
    },
  },
});

export const { getUserInfo } = userSlice.actions;
export default userSlice.reducer;
