import styled from 'styled-components';

export const HomeContainer = styled.div`
  position:relative;
  display:flex;
  min-width:100%;
  margin-top:70px;
  @media (max-width: 900px) {
    margin-top:40px;
  }
`;

export const MainContent = styled.div`
  display:flex;
  flex-direction:column;
  transition:all 1s ease;
  width:100%;
  overflow-x:hidden;
`;
