import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/expensesSlice";
import { Form, Container, Row, Col, Button, Card } from "react-bootstrap";

const FiltersList = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = React.useState({});
  const handleApplyFilters = () => {
    console.log("filters", filters, setFilter(filters));
    dispatch(setFilter(filters));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <React.Fragment>
      <Container className="mt-5">
        <Card className="shadow-lg p-4">
          <h3 className="text-center mb-4 text-primary">Filter Expense</h3>
          <Row>
            <Col md={4} sm={12}>
              <Form.Group className="mb-3" controlId="expenseName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Filter by Name"
                  value={filters.name}
                  onChange={handleFilterChange}
                  name="name"
                  className="form-control-lg rounded-pill border-3 shadow-sm"
                />
              </Form.Group>
            </Col>
            <Col md={4} sm={12}>
              <Form.Group className="mb-3" controlId="expenseAmount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Filter by Amount"
                  value={filters.amount}
                  onChange={handleFilterChange}
                  name="amount"
                  className="form-control-lg rounded-pill border-3 shadow-sm"
                />
              </Form.Group>
            </Col>
            <Col md={4} sm={12}>
              <Form.Group className="mb-3" controlId="expenseDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={filters.date}
                  onChange={handleFilterChange}
                  name="date"
                  className="form-control-lg rounded-pill border-3 shadow-sm"
                />
              </Form.Group>
            </Col>
          </Row>
          <Col className="text-center">
            <Button
              variant="primary"
              className="rounded-pill px-4 py-2"
              onClick={handleApplyFilters}
            >
              Apply Filters
            </Button>
          </Col>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default FiltersList;
