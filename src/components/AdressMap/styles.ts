import styled from "@emotion/styled";

export const AddressSection = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 width: 100%;
  background-color: #f5faff;
  padding: 32px;
  border-radius: 12px;
  gap: 32px;
  align-items: center;
`;


export const InfoContainer = styled.div`
 max-width: 400px;

  h2 {
    font-size: 24px;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0;
  }
`;

export const MapContainer = styled.div`
  iframe {
    width: 500px;
    height: 300px;
    border: none;
    border-radius: 8px;
  }
`;