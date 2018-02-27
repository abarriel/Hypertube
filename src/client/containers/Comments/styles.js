import styled from 'styled-components';

export const CommentsContainer = styled.div`
  position:relative;
  display:flex;
  width:100vw;
  left:0;
  max-height: ${({ height }) => height}vh;
  min-height:400px;
  transition:height 0.5s ease-in-out;
  z-index:4000;
  overflow:hidden;
  background-color:red;
`;
