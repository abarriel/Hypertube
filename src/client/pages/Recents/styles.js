import styled from 'styled-components';

export const RecentsContainer = styled.div`
  display:flex;
  position:relative;
  width:100vw;
  margin-top:75px;
  min-height:calc(100vh - 75px);
`;

export const MoviePreviewContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: center;
  }
  flex-wrap:wrap;
  width:calc(100% - 120px);
  padding: 0 60px;
  @media (max-width: 900px) {
    padding: 0 4%;
    width:88%;
  }
`;
