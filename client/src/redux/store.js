import { configureStore } from "@reduxjs/toolkit";
import { resourceSlice } from "./UserSlice";

export default configureStore({
  reducer: {
    resource: resourceSlice.reducer,
  },
});
