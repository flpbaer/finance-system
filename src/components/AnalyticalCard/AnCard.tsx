import { CardContainer, CardContent, ContainerTitle } from "./style";


type Props = {
  title: string;
  value: any;
};

function AnCard({ title, value }: Props) {

  return (
    <CardContainer>
      <ContainerTitle>
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>{title}</span>
      </ContainerTitle>
      <CardContent>
       <h3 style={{color: "#1f93ff"}}>R$ {value}</h3>
      </CardContent>
    </CardContainer>
  );
}

export default AnCard;
