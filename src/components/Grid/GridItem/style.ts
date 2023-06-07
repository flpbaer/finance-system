import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  display: flex;
  min-height: 60px;
  padding: 20px 20px 20px 16px;
`;

export const LeftContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  word-break: break-word;
`;

export const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
    margin-left: 10px;
`;
