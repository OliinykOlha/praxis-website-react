import styled from "@emotion/styled";

export const KontaktWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: visible;
  flex-direction: column;
`;

export const KontaktComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  gap: 40px;
  overflow: visible;

  @media (max-width: 768px) {
    height: auto;
    gap: 25px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    padding: 10px;
  }
`;

export const KontaktPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  gap: 20px;

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const KontaktDescription = styled.div`
  position: absolute;
  bottom: 70px;
  right: 15px;
  gap: 20px;
  color: rgb(71, 62, 64);

  @media (max-width: 768px) {
    position: static;
    margin: 20px 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    gap: 10px;
  }
`;

export const TwoColumnSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 250px;
  gap: 20px;
  margin-top: 50px;
  padding: 20px;
  background: linear-gradient(
    to top,
    rgba(175, 180, 185, 1),
    rgba(229, 232, 234, 0)
  );

  border-bottom: 3px solid #0a4b96ff;
@media (max-width: 768px) {
    flex-direction: column;
    max-height: none;
    padding: 30px 20px;
    gap: 30px;
}

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 20px 15px;
    gap: 20px;
  }
`;

export const KontaktSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
  height: 250px;
  gap: 30px;
  overflow: visible;
  font-size: 16px;

  @media (max-width: 768px) {
    height: auto;
    font-size: 15px;
    gap: 25px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    gap: 20px;
  }
`;
