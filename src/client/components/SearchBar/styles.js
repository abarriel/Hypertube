import styled from 'styled-components';

import GoSearch from 'react-icons/lib/go/search';
import MdClear from 'react-icons/lib/md/clear';

export const SearchBarContainer = styled.div`
  position:relative;
  display:flex;
  color:white;
  justify-content: flex-end;
  align-items: center;
  height:100%;
  min-width:20px;
  background-color:black;
  @media (max-width: 450px) {
    display:none;
  };
  z-index:1100;overflow:hidden;
`;

export const SearchLogo = styled(GoSearch)`
  color:white;
  font-size:1.4em;
  cursor:pointer;
  margin:0;
  margin-left:5px;
  z-index:1100;
`;

export const SearchBox = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  width:${({ wrapped }) => wrapped ? 30 : 270}px;
  border: solid ${({ wrapped }) => wrapped ? 0 : 1}px rgba(255,255,255,1);
  transition: width 0.2s ease-in-out;
  height:32px;
  z-index:1100;
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
  z-index:1100;
`;

export const Cross = styled(MdClear)`
  position:absolute;
  right:10px;
  color:white;
  cursor:pointer;
  z-index:1100;
`;

export const Closer = styled.div`
  position:fixed;
  top:0;
  right:0;
  width:100vw;
  height:100vh;
  z-index:1000;
`;
