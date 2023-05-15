import React, { Dispatch, SetStateAction, useState } from "react";
import { Area, Container } from "./style";
import { Button, Input, message } from "antd";
import { Transaction } from "../../types/types";

type Props = {
  handleAdd(transaction: Transaction): void;
  transactionsList: Transaction[];
  setTransactionsList: Dispatch<SetStateAction<Transaction[]>>;
};

function Form({ handleAdd, transactionsList, setTransactionsList }: Props) {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<number | undefined>();
  const [isExpense, setExpense] = useState<boolean>(false);

  const generateID = (): number => Math.round(Math.random() * 1000);

  const handleSave = (): void => {
    if (!desc || !amount) {
      message.info("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      message.info("O valor tem que ser positivo!");
      return;
    }

    const transaction: Transaction = {
      id: generateID(),
      description: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount(undefined);
  };

  return (
    <>
      <Container>
        <Area>
          <span>Nome</span>
          <Input
            placeholder="Digite aqui o nome"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            style={{ marginTop: "4px", borderRadius: "4px", height: "40px" }}
          />
        </Area>
        <Area style={{ marginTop: "20px" }}>
          <span>Valor</span>
          <div style={{ display: "flex" }}>
            <Input
              placeholder="Ex: 00.000,00"
              onChange={(e) => setAmount(Number(e.target.value))}
              value={amount}
              type="number"
              style={{ borderRadius: "2px", height: "64px", marginTop: "3px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Button
                style={{
                  borderRadius: "2px",
                  marginLeft: "4px",
                  marginTop: "2px",
                }}
                id="rIncome"
                onClick={() => setExpense(false)}
              >
                Entrada
              </Button>
              <Button
                style={{
                  borderRadius: "2px",
                  marginLeft: "4px",
                  marginTop: "2px",
                }}
                id="rExpenses"
                onClick={() => setExpense(true)}
              >
                Saída
              </Button>
            </div>
          </div>
        </Area>
        <Area style={{ marginTop: "10px" }}>
          <Button
            style={{
              width: "100%",
              borderRadius: "2px",
              background: "#1f93ff",
              color: "#fff",
              border: "none",
            }}
            onClick={handleSave}
          >
            Adicionar
          </Button>
        </Area>
      </Container>
    </>
  );
}

export default Form;
