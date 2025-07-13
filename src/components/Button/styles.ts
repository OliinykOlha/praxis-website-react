import styled from "@emotion/styled";

interface MainButtonProps {
  isAbsolute?: boolean;

}

export const MainButton = styled.button<MainButtonProps>`
  width: ${({ isAbsolute }) => (isAbsolute ? "300px" : "200px")};
  position: ${({ isAbsolute }) => (isAbsolute ? "absolute" : "static")};
  height: fit-content;
  padding: 20px;
  bottom: 30px;
  left: ${({ isAbsolute }) => (isAbsolute ? "20px" : "auto")}; 
  margin-top: ${({ isAbsolute }) => (isAbsolute ? "auto" : "20px")};
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
