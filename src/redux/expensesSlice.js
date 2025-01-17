import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
    filters: { name: "", amount: "", date: "" },
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    dateExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (exp) => exp.id !== action.payload
      );
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
});
export const { addExpense, dateExpense, setFilter } = expensesSlice.actions;
export default expensesSlice.reducer;
