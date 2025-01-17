import logo from "./logo.svg";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";
import FiltersList from "./component/FiltersList";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <ExpenseForm />
      <ExpenseList />
      <FiltersList />
    </div>
  );
}

export default App;
