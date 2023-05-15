import React, { Dispatch, SetStateAction } from "react";
import { Container, Content } from "./style";
import Header from "../../components/Header/Header";
import Resume from "../../components/Resume/resume";
import Form from "../../components/Form/Form";
import Grid from "../../components/Grid/Grid";
import { Transaction } from "../../types/types";

type Props = {
  total: number;
  income: number;
  expense: number;
  handleAdd(transaction: Transaction): void;
  transactionsList: Transaction[];
  setTransactionsList: Dispatch<SetStateAction<Transaction[]>>;
};

function Home({
  total,
  income,
  expense,
  handleAdd,
  transactionsList,
  setTransactionsList,
}: Props) {
  return (
    <Container>
      <Header value={total} />
      <Content>
        <Resume expense={expense} income={income} />
        <Form
          handleAdd={handleAdd}
          setTransactionsList={setTransactionsList}
          transactionsList={transactionsList}
        />
        <Grid itens={transactionsList} setItens={setTransactionsList} />
      </Content>
    </Container>
  );
}

export default Home;
