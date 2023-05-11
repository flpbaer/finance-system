import React, { Dispatch, SetStateAction, useState } from "react";
import { Area, Container } from "./style";
import { Button, Input, message } from "antd";

type Props = {
  handleAdd(transaction: any): void;
  transactionsList: string[];
  setTransactionsList: Dispatch<SetStateAction<any>>;
};

function Form({ handleAdd, transactionsList, setTransactionsList }: Props) {
  const [desc, setDesc] = useState<any>("");
  const [amount, setAmount] = useState<any>();
  const [isExpense, setExpense] = useState<any>(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      message.info("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      message.info("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount(null);
  };


  return (
    <>
      <Container>
        <Area>
          <span>Nome</span>
          <Input
            placeholder="Digite aqui o nome"
            value={desc} onChange={(e) => setDesc(e.target.value)}
            style={{ marginTop: "4px", borderRadius: "4px", height: "40px" }}
          />
        </Area>
        <Area style={{ marginTop: "20px" }}>
          <span>Valor</span>
          <div style={{ display: "flex" }}>
            <Input
              placeholder="Ex: 00.000,00"
              onChange={(e) => setAmount(e.target.value)}
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
