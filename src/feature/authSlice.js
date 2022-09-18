import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const userStorage = localStorage.getItem("user");
let user;
if (typeof userStorage === "string") {
  user = JSON.parse(userStorage);
}

// initial state
const initialState = {
  user: user ? user : null,
  error: false,
  success: false,
  loading: false,
  message: "",
};

// actions
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      const message =
        error.response.data && error.response.data.error
          ? error.response.data.error
          : "An error occured";

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      error.response.data && error.response.data.error
        ? error.response.data.error
        : "An error occured";

    return thunkAPI.rejectWithValue(message);
  }
});

// reducer
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
