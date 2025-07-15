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
`;

export const KontaktPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  gap: 20px;
`;

export const KontaktDescription = styled.div`
position: absolute;
bottom: 70px;
right: 15px ;
gap: 20px;
color: rgb(71, 62, 64);

`;
