import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getResources = createAsyncThunk("resource", async () => {
  const resources = await axios.get(
    "https://media-content.ccbp.in/website/react-assignment/resources.json"
  );
  return resources.data;
});

export const getResourceDetails = createAsyncThunk(
  "resource/details",
  async (resource_id) => {
    const resourceDetails = await axios.get(
      `https://media-content.ccbp.in/website/react-assignment/resource/${resource_id}.json`
    );
    return resourceDetails.data;
  }
);

export const resourceSlice = createSlice({
  name: "resource",
  initialState: {
    resources: [],
    resourceDetails: {},
    pending: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getResources.pending, (state) => {
      state.pending = true;
      state.error = false;
    });
    builder.addCase(getResources.fulfilled, (state, action) => {
      state.resources = action.payload;
      state.pending = false;
    });
    builder.addCase(getResources.rejected, (state) => {
      state.pending = false;
      state.error = true;
    });
    builder.addCase(getResourceDetails.fulfilled, (state, action) => {
      state.resourceDetails = action.payload;
    });
  },
});
