import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expensesSlice";
import { Button } from "bootstrap";

const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch;
  const handleSubmit = (e) => {
    dispatch(addExpense({ id: Date.now(), amount: Number(amount), date }));
    setName();
    setAmount();
    setDate();
  };

  return (
    <React.Fragment>
      <Form onSubmit={() => handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Amount"
            onChange={(e) => setAmount(e.target.value)}
          />{" "}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="Date"
            placeholder="Enter Date"
            onChange={(e) => setDate(e.target.value)}
          />{" "}
        </Form.Group>
        <Button type="submit">Add Expense</Button>
      </Form>
    </React.Fragment>
  );
};

export default ExpenseForm;
