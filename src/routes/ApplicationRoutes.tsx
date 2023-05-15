import React, { Dispatch, SetStateAction } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import { Transaction } from "../types/types";

type Props = {
  total:number;
  income: number;
  expense: number;
  handleAdd(transaction: Transaction): void;
  transactionsList: Transaction[];
  setTransactionsList: Dispatch<SetStateAction<Transaction[]>>;
};

function ApplicationRoutes({
  total,
  income,
  expense,
  handleAdd,
  transactionsList,
  setTransactionsList,
}: Props) {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <Home
            expense={expense}
            handleAdd={handleAdd}
            income={income}
            setTransactionsList={setTransactionsList}
            total={total}
            transactionsList={transactionsList}
          />
        }
      />
    </Routes>
  );
}

export default ApplicationRoutes;
