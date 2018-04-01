import styled from 'styled-components';

export const RecentsContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100vw;
  min-height:calc(100vh - 85px);
  margin-top:100px;
  margin-bottom:50px;
`;

export const MoviePreviewContainer = styled.div`
display:flex;
justify-content: flex-start;
align-items: flex-start;
flex-wrap:wrap;
width:92%;
padding-left:4%;
padding-right:4%;
@media (max-width: 400px) {
  padding:0;
  width:100%;
};
overflow:hidden;
`;

export const MoviePreviewContent = styled.div`
postion:relative;
  @media (max-width: 400px) {
    width:100%;
    height:150vw;
    margin:0;
  };
`;
