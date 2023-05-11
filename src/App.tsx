import { useEffect, useState } from "react";
import ApplicationRoutes from "./routes/ApplicationRoutes";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState<any>();

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: any) => item.expense)
      .map((transaction: any) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item: any) => !item.expense)
      .map((transaction: any) => Number(transaction.amount));

    const expense = amountExpense
      .reduce((acc: any, cur: any) => acc + cur, 0)
      .toFixed(2);
    const income = amountIncome
      .reduce((acc: any, cur: any) => acc + cur, 0)
      .toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(income);
    setExpense(expense);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transaction: any) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };
  return (
    <div>
      <GlobalStyle />
      <ApplicationRoutes
        expense={expense}
        handleAdd={handleAdd}
        income={income}
        setTransactionsList={setTransactionsList}
        total={total}
        transactionsList={transactionsList}
      />
    </div>
  );
}

export default App;
