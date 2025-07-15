import styled from "@emotion/styled";

interface HomeDescriptionProps {
  primary?: boolean;
}

interface TwoColumnSectionProps {
  isBackground?: boolean;
  isBorderBottom?: boolean;
}

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  overflow: visible;
  flex-direction: column;
`;

export const TwoColumnSection = styled.div<TwoColumnSectionProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 350px;
  gap: 20px;
  margin-top: 50px;
  padding: 20px;
  background: ${({ isBackground }) =>
    isBackground
      ? `linear-gradient(
        to top,
        rgba(66, 115, 171, 1),
        rgba(135, 206, 250, 0)
      )`
      : "none"};

  border-bottom: ${({ isBorderBottom }) =>
    isBorderBottom ? "3px solid #0a4b96ff" : "none"};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const KontaktSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  height: 250px;
  gap: 40px;
  overflow: visible;

  font-size: 26px;
`;

export const HomePicture = styled.img<HomeDescriptionProps>`
  width: ${({ primary }) => (primary ? "100%" : "450px")};
  height: ${({ primary }) => (primary ? "100%" : "350px")};
  object-fit: cover;
`;

export const HomeDescription = styled.div<HomeDescriptionProps>`
  position: absolute;
  bottom: ${({ primary }) => (primary ? "30px" : "none")};
  margin-bottom: 20px;
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
