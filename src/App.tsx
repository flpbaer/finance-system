import { useEffect, useState } from "react";
import ApplicationRoutes from "./routes/ApplicationRoutes";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Transaction } from "./types/types";

function App() {
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);
  const [income, setIncome] = useState<number>(0);
  const [expense, setExpense] = useState<number>(0);
  const [total, setTotal] = useState<number | any>();

  useEffect(() => {
    const data = localStorage.getItem('transactions');
    if (data) {
      const parsedData: Transaction[] = JSON.parse(data);
      setTransactionsList(parsedData);
    }
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item: Transaction) => item.expense)
      .map((transaction: Transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item: Transaction) => !item.expense)
      .map((transaction: Transaction) => Number(transaction.amount));

    const expenseTotal = amountExpense.reduce((acc: number, cur: number) => acc + cur, 0);
    const incomeTotal = amountIncome.reduce((acc: number, cur: number) => acc + cur, 0);

    const totalAmount = Math.abs(incomeTotal - expenseTotal).toFixed(2);
    const formattedTotal = `${Number(incomeTotal) < Number(expenseTotal) ? '-' : ''}R$ ${totalAmount}`;

    setIncome(incomeTotal);
    setExpense(expenseTotal);
    setTotal(formattedTotal);
  }, [transactionsList]);

  const handleAdd = (transaction: Transaction) => {
    const updatedTransactions = [...transactionsList, transaction];
    setTransactionsList(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
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
