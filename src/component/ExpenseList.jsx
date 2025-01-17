import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateExpense } from "../redux/expensesSlice"; // Ensure the correct action name
import { Button, Card, Container, Row, Col } from "react-bootstrap";
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
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <React.Fragment>
      <Container className="mt-4">
        <h2 className="text-center mb-4">Expense List</h2>
        {filteredExpenses.length > 0 ? (
          <>
            <Row>
              {filteredExpenses.map((expense) => (
                <Col md={6} lg={4} key={expense.id} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>{expense.name}</Card.Title>
                      <Card.Text>
                        <strong>Amount:</strong> ${expense.amount}
                        <br />
                        <strong>Date:</strong> {expense.date}
                      </Card.Text>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => dispatch(dateExpense(expense.id))}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-4">
              <h3 className="text-primary">Total Amount: ${totalAmount}</h3>
            </div>
          </>
        ) : (
          <p className="text-center text-muted">No expenses found.</p>
        )}
      </Container>
    </React.Fragment>
  );
};

export default ExpenseList;
