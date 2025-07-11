import styled from "@emotion/styled";

export const MainButton = styled.button`
  width: 200px;
  height: fit-content;
  padding: 20px;
  margin-top: 20px;
  background: #0a4b96ff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: rgb(202, 200, 200);
  }
`;
