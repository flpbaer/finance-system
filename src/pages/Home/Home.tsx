import React, { Dispatch, SetStateAction } from "react";
import { Container, Content } from "./style";
import Header from "../../components/Header/Header";
import Resume from "../../components/Resume/resume";
import Form from "../../components/Form/Form";
import Grid from "../../components/Grid/Grid";

type Props = {
  total: any;
  income: number;
  expense: number;
  handleAdd(transaction: any): void;
  transactionsList: string[];
  setTransactionsList: Dispatch<SetStateAction<any>>;
};

function ExamplePage({
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

export default ExamplePage;
