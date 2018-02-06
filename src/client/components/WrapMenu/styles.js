import styled from 'styled-components';

export const WrapMenuContainer = styled.div`
  position:absolute;
  display:flex;
  flex-direction:column;
  min-width:150px;
  transition: background-color 0.3s ease-in-out;
  height:${({ displayMenu }) => displayMenu ? '70px' : '0px'};
  background-color:#000;
  top:70px;
  @media (max-width: 900px) {
    top:40px;
  }
  overflow:hidden;
`;

export const WrapMenuElem = styled.div`
  position:relative;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  width:100%;
  min-height:30px;
  background-color:#000;
  padding-top:2.5px;
  padding-bottom:2.5px;
  &:hover {
    background-color:rgb(35,35,35);
  }
`;

export const WrapMenuElemText = styled.p`
  color:white;
  user-select: none;
  margin-right:15px;
  font-size:0.9em;
`;

export const Icon = styled.div`

`;
