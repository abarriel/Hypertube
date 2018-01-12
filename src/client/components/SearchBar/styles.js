import styled from 'styled-components';

import GoSearch from 'react-icons/lib/go/search';

export const SearchBarContainer = styled.div`
  display:flex;
  color:white;
  justify-content: flex-end;
  align-items: center;
  height:70px;
  min-width:20px;
  background-color:black;
`;

export const SearchLogo = styled(GoSearch)`
  color:white;
  font-size:1.4em;
  cursor:pointer;
  margin:0;
  margin-left:5px;
`;

export const SearchBox = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  width:${({ wrapped }) => wrapped ? 30 : 270}px;
  border: solid ${({ wrapped }) => wrapped ? 0 : 1}px rgba(255,255,255,1);
  transition: width 0.2s ease-in-out;
  height:32px;
`;

export const SearchInput = styled.input`
  display:flex;
  flex:1;
  height:28px;
  margin-left:5px;
  margin-right:5px;
  background-color:black;
  border: none;
  color:white;
  &:focus {
    outline:none;
  }
`;
