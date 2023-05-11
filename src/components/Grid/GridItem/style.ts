import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  min-height: 60px;
  padding: 20px;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
    margin-left: 10px;
`;
