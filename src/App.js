import logo from "./logo.svg";
import "./App.css";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseList from "./component/ExpenseList";
import FiltersList from "./component/FiltersList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseForm />
        <ExpenseList />
        <FiltersList />
      </header>
    </div>
  );
}

export default App;
