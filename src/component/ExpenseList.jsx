import React from "react";
import { Button } from "react-bootstrap/lib/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { dateExpense } from "../redux/expensesSlice";

const ExpenseList = () => {
  const { expenses, filters } = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const filteredExpenses = expenses.filter((exp) => {
    return (
      (filters.name
        ? exp.name.toLowerCase().includes(filters.name.toLowerCase())
        : true) &&
      (filters.amount ? exp.amount === Number(filters.amount) : true) &&
      (filters.date ? exp.date === filters.date : true)
    );
  });
  const totalAmount = filteredExpenses.reduce(
    (total, expenses) => total + expenses.amount,
    0
  );
  return (
    <React.Fragment>
      <h2>Expense List</h2>
      {filteredExpenses?.length > 0 ? (
        filteredExpenses.map((expense) => {
          <>
            <div key={expense.id}>
              <p>{`${expense.name} - ${expense.amount}- ${expense.date}`}</p>
            </div>
            <Button onClick={() => dispatch(dateExpense.id)}> Delete</Button>
          </>;
          {
            <h3> Total Amount: ${totalAmount}</h3>;
          }
        })
      ) : (
        <p>NO expenses found.</p>
      )}
    </React.Fragment>
  );
};

export default ExpenseList;
