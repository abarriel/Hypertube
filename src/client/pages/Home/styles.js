import styled from 'styled-components';

export const HomeContainer = styled.div`
  display:flex;
  width:100%;
`;

export const MainContent = styled.div`
  display:flex;
  flex-direction:column;
  transition:all 1s ease;
  margin-left: ${({ hidden }) => hidden ? '-85px' : '85px'};
  width:calc(100%) - 85px;
`;
