import React from "react";
import { ContainerHeader, Subtitle, Title } from "./style";

type Props = {
  value?: number; 
};

function Header({ value }: Props) {
  const formattedValue = value ? value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  }) : "";

  return (
    <ContainerHeader>
      <Subtitle>Saldo atual:</Subtitle>
      <Title>{formattedValue}</Title>
    </ContainerHeader>
  );
}

export default Header;