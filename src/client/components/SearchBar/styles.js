import styled from 'styled-components';

export const SearchBarStyled = styled.input`
  display:flex;
  width:300px;
  height:30px;
  border-radius:300px;
  border:0;
  padding:3px;
  padding-left:15px;
  padding-right:15px;
  margin-right:15px;
  background-color:white;
  &:focus {
    outline: none;
  }
`;
