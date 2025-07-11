import styled from "@emotion/styled";

interface HomeDescriptionProps {
  primary?: boolean;
}

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: visible;
  flex-direction: column;
`;

export const TwoColumnSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 350px;
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HomePicture = styled.img<HomeDescriptionProps>`
  width: ${({primary}) => primary ?  '100%' : '450px'};
  height: ${({primary}) => primary ?  '100%' : '350px'};
  object-fit: cover;
`;

export const HomeDescription = styled.div<HomeDescriptionProps>`
  position: absolute;
  bottom: 30px;
  left: 20px;
  gap: 20px;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-bottom: ${({ primary }) => (primary ? "3px solid #0a4b96ff" : "none")};
  border-radius: 8px;
`;

export const Title = styled.div`
  font-size: 2rem;
`;
