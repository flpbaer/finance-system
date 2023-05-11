import React, { Dispatch, SetStateAction } from "react";
import { Container } from "./style";
import GridItem from "./GridItem/GridItem";

type Props = {
  itens: any;
  setItens: SetStateAction<Dispatch<any>>;
};

function Grid({ itens, setItens }: Props) {
  const onDelete = (id: any) => {
    const newArray = itens.filter((transaction: any) => transaction.id !== id);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <Container>
      {itens.length <= 0 ? (
        <>
          <div
            style={{
              width: "center",
              height: "100%",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 style={{ color: "rgba(0,0,0,0.3)" }}>
              Você não possuí nenhum histórico. :/
            </h3>
          </div>
        </>
      ) : (
        <>
          {itens.map((i: any, index: any) => {
            return <GridItem item={i} onDelete={onDelete} />;
          })}
        </>
      )}
    </Container>
  );
}

export default Grid;
