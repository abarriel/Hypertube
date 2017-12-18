import styled from 'styled-components';

export const HomeContainer = styled.div`
  display:flex;
  width:100%;
`;

export const MainContent = styled.div`
  display:flex;
  flex-direction:column;
  transition:all 1s ease;
  margin-left: 85px;
  width:100%;
  overflow-x:hidden;
`;

export const HeaderContainer = styled.div`
  min-width:800px;
  margin-bottom:35px;
`;

export const HeaderImage = styled.img`
  width:calc(100vw - 85px);
  height:auto;
  max-width:1500px;
  min-width:1000px;
`;
