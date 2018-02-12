import styled from 'styled-components';

export const RecentsContainer = styled.div`
  display:flex;
  position:relative;
  width:100%;
  margin-top:75px;
  min-height:calc(100vh - 75px);
  padding-bottom:100px;
`;

export const MoviePreviewContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: center;
  }
  flex-wrap:wrap;
  width:92%;
  padding-left:4%;
  padding-right:4%;
  @media (max-width: 400px) {
    padding: 0 4%;
    padding:0;
  }
`;
