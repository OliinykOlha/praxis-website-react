import styled from "@emotion/styled";

export const UnserTeamWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  overflow: visible;
  flex-direction: column;
  align-items: center;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  width: 100%;
  max-width: 1000px;
  min-height: 220px;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 25px;
  border-bottom: 3px solid rgba(10, 75, 150, 1);
  background: linear-gradient(
    to top,
    rgba(66, 115, 171, 1),
    rgba(135, 206, 250, 0)
  );
`;

export const UnserTeamDescription = styled.div`
  /* position: absolute; */
  /* bottom: 30px; */
  width: 100%;
  margin-bottom: 20px;
  left: 20px;
  gap: 20px;
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-bottom: 3px solid #0a4b96ff;
  border-radius: 8px;
`;

export const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  & > img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const UnserTeamPicture = styled.div`
 position: relative;
  width: 100%;
  max-height: 450px;
  margin-top: 25px;
  display: inline-block;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: block;
  }
`;
