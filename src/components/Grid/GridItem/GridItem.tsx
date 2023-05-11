import React from "react";
import { Container, LeftContent, RightContent } from "./style";
import { BiTrash } from "react-icons/bi";

type PropsItem = {
  onDelete(id: any): void;
  item: any;
};

function GridItem({ item, onDelete }: PropsItem) {
  return (
    <Container>
      <LeftContent>
        <span>{item.desc}</span>
        <span style={{marginTop: "5px"}}>R$ {item.amount}</span>
      </LeftContent>
      <RightContent>
        <div
          style={{
            width: "44px",
            height: "44px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%",
            backgroundColor: "#f4f5f9",
          }}
          onClick={() => onDelete(item.id)}
        >
          <BiTrash size={24} style={{color: "#1f93ff"}} />
        </div>
      </RightContent>
    </Container>
  );
}

export default GridItem;
