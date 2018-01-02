import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:calc(100vw - 185px);
  margin-left:85px;
  min-height:calc(100vh - 100px);
  padding:50px;
`;

export const MoviePreviewContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  width:100%;
  margin-top:25px;
`;

export const ParamsContainer = styled.div`
  display:flex;
  flex-direction:column;
  flex-wrap:wrap;
  min-height:100px;
`;

export const SlideSelectContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:45px;
`;
