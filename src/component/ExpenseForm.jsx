import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/expensesSlice";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
const ExpenseForm = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addExpense({ id: Date.now(), name, amount: Number(amount), date })
    );
    setName();
    setAmount();
    setDate();
  };

  return (
    <React.Fragment>
      <Container className="mt-5">
        <Card className="shadow-lg p-4">
          <h2 className="text-center mb-4 text-primary">Add Expense</h2>
          <Form>
            <Row>
              <Col md={4} sm={12}>
                <Form.Group
                  className="mb-3"
                  style={{ marginTop: "8px" }}
                  controlId="formName"
                >
                  <label>Name</label>
                  <Form.Control
                    type="text"
                    value={name}
                    placeholder="Enter Expense Name"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control-lg rounded-pill border-3 shadow-sm"
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group className="mb-3" controlId="formAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="number"
                    value={amount}
                    placeholder="Enter Amount"
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-control-lg rounded-pill border-3 shadow-sm"
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group className="mb-3" controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="form-control-lg rounded-pill border-3 shadow-sm"
                  />
                </Form.Group>
              </Col>
            </Row>
            <br />
            <Row>
              <Col className="text-center">
                <Button
                  variant="primary"
                  className="rounded-pill px-4 py-2"
                  onClick={(e) => handleSubmit(e)}
                >
                  Add Expense
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default ExpenseForm;
