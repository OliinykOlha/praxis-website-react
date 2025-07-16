import styled from "@emotion/styled";

export const KontaktFormComponent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 600px;
  padding: 30px;
  background-color: white;

   @media (max-width: 768px) {
    min-width: 100%;
    padding: 20px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    padding: 15px;
  }
`;

export const Title = styled.div`
  align-self: center;
  font-size: 26px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 22px;
  }
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

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.div`
 height: 20px;
 font-size: 16px;
 color: red;
`;

export const SuccessMessage = styled.div`
 height: 20px;
 font-size: 16px;
 color: green;
`;