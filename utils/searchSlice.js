import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: {},
  },
  reducers: {
    addToCache: (state, action) => {
      const { query, results } = action.payload;
      state.cache[query] = results;
    },
  },
});

export const { addToCache } = searchSlice.actions;
export default searchSlice.reducer;
