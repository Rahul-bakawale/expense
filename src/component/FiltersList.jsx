import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/expensesSlice";

const FiltersList = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (e) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };
  return (
    <React.Fragment>
      <h3>Filter Expense</h3>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Filter by Name"
          onChange={handleFilterChange}
        />{" "}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="text"
          placeholder="Filter by  Amount"
          onChange={handleFilterChange}
        />{" "}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="Date"
          placeholder="Filter by  Date"
          onChange={handleFilterChange}
        />{" "}
      </Form.Group>
    </React.Fragment>
  );
};

export default FiltersList;
