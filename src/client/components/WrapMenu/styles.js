import styled from 'styled-components';

export const WrapMenuContainer = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  min-width:150px;
  transition: all 0.3s ease-in-out;
  height:${({ displayMenu }) => displayMenu ? '70px' : '0px'};
  margin-top:15px;
  margin-right:20px;
  border-radius:3px;
  background-color:rgb(25,25,25);
  overflow:hidden;
`;

export const WrapMenuElem = styled.div`
  position:relative;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  width:100%;
  height:30px;
  background-color:rgb(25,25,25);
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
