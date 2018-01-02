import styled from 'styled-components';
import GoSearch from 'react-icons/lib/go/search';
import { MAIN_COLOR } from '../../colors';

export const SearchBarStyled = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:280px;
  height:25px;
  border-radius:300px;
  border-style: solid;
  border-width:2px;
  border-color:${MAIN_COLOR};
  padding:5px;
  padding-left:15px;
  padding-right:15px;
  margin-right:15px;
`;

export const SearchBarInput = styled.input`
  color:${MAIN_COLOR};
  border:0;
  flex:1;
  background-color:transparent;
  font-size:1em;
  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(GoSearch)`
  color:${MAIN_COLOR};
  cursor:pointer;
  font-size:1.1em;
`;
