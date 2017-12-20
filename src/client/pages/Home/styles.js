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
  display:flex;
  width:calc(100vw - 85px);
  justify-content: center;
  align-items: center;
  margin-bottom:35px;
  background-color: rgb(20,20,20);
  overflow:hidden;
`;

export const HeaderImage = styled.img`
  position:relative;
  width:calc(100vw - 85px);
  height:auto;
  max-width:1500px;
  min-width:1000px;
  box-shadow: 0 0 50px 1px rgba(0,0,0,0.3);
`;
