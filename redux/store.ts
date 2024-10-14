import { configureStore } from "@reduxjs/toolkit";

import { brandSlice } from "./states/brand";

export interface AppStore {
  brand: any[];
}

export default configureStore<AppStore>({
  reducer: {
    brand: brandSlice.reducer,
  },
});
