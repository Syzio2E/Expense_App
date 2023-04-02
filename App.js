import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: "Car insurance",
      amount: 294,
      date: new Date(24, 2, 1998),
      Location: "london",
    },
    {
      id: 'e2',
      title: "bike insurance",
      amount: 300,
      date: new Date(2, 2, 1998),
      Location: "paris",
    },
    {
      id: 'e3',
      title: "Tour",
      amount: 301,
      date: new Date(31, 2, 1998),
      Location: "france",
    },
  ];

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.Location}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
