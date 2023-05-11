import { AnimatePresence } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

type Props = {
  total: any;
  income: number;
  expense: number;
  handleAdd(transaction: any): void;
  transactionsList: string[];
  setTransactionsList: Dispatch<SetStateAction<any>>;
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
    <AnimatePresence>
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
    </AnimatePresence>
  );
}

export default ApplicationRoutes;
