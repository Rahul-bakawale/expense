import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expensesSlice";
const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});
export default store;
