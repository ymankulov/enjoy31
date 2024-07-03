import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
};

export const AdminSlice = createSlice({
  name: "ADMIN",
  initialState,
  reducers: {
    createUser(state, action) {
      let payload = action.payload;
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
  },
});

export const { createUser } = AdminSlice.actions;
export default AdminSlice.reducer;
