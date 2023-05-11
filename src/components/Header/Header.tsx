import React from "react";
import { ContainerHeader, Subtitle, Title } from "./style";
import { formatToRealBR } from "../helpers/moneyHelper";
type Props = {
  value: number;
};

function Header({ value }: Props) {
  return (
    <ContainerHeader>
      <Subtitle>Saldo atual:</Subtitle>
      <Title>{formatToRealBR(value)}</Title>
    </ContainerHeader>
  );
}

export default Header;
