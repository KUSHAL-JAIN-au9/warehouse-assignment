import { configureStore } from "@reduxjs/toolkit";

import warehouseReducer from "./warehouses";

//configuring the store
export const store = configureStore({
  reducer: {
    warehouses: warehouseReducer,
  },
});

console.log(store.getState());
