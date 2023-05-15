import React from "react";
import { CardContainer, CardContent, ContainerTitle } from "./style";

type Props = {
  title: string;
  value: any;
};

function AnCard({ title, value }: Props) {
  const formattedValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <CardContainer>
      <ContainerTitle>
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>{title}</span>
      </ContainerTitle>
      <CardContent>
        <h3 style={{ color: "#1f93ff" }}>{formattedValue}</h3>
      </CardContent>
    </CardContainer>
  );
}

export default AnCard;
