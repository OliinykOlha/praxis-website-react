import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
`;

export const HomePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HomeDescription = styled.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  gap: 20px;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 8px;
`;

export const Title = styled.div`
font-size: 2rem;
`;