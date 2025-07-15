import styled from "@emotion/styled";

export const KontaktFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 600px;
  padding: 30px;
  background-color: white;
`;

export const Title = styled.div`
  align-self: center;
  font-size: 26px;
  font-weight: bold;
`;

export const CheckboxContainer = styled.div`
 display: flex;
 align-items: center;
 gap: 10px;
`

export const Checkbox = styled.input`
 width: 25px;
 height: 25px;
`;

export const CheckboxLabel = styled.label`
 font-size: 20px;
`;

export const ErrorMessage = styled.div`
 height: 20px;
 font-size: 16px;
 color: red;
`;