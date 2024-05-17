import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchUser } from './user/usertAPI';



// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'user/fetchUser',
  async (amount) => {
    const response = await fetchUser(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

// Redux slice for managing user state
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  // Reducers define actions and update state based on those actions
  reducers: {
    // Reducer for handling login action
    login: (state, action) => {
      state.user = action.payload; // Update user state with the payload (user data)
    },
    // Reducer for handling logout action
    logout: (state) => {
      state.user = null; // Clear user state on logout
  
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
