import styled from "@emotion/styled";

export const LeistungenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  gap: 20px;
`;

export const LeistungenComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-height: 550px;
  padding: 30px 20px;
  text-align: center;
  background: linear-gradient(
    to top right,
    rgba(152, 187, 226, 1),
    rgba(135, 206, 250, 0)
  );
  color: #2c2c2c;
  font-family: Arial, sans-serif;
`;

export const MainTitle = styled.h1`
  font-size: 28px;
`;

export const LeistungComponent = styled.div`
  margin-top: 20px;
  padding: 20px;
  gap: 20px;
  border: 1px solid black;
  border-radius: 16px;
  cursor: pointer;
  font-size: 26px;

  > h3 {
    font-size: 20px;
  }
`;

export const LeistungDescription = styled.div`
  margin-top: 16px;
  border-radius: 12px;
  font-size: 15px;
`;
