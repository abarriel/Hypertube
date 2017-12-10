import styled from 'styled-components';
import GoSearch from 'react-icons/lib/go/search';

import { MAIN_COLOR } from '../../colors';

export const SearchContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  height:50px;
  padding-left:45px;
  margin-top:30px;
`;

export const SeachIcon = styled(GoSearch)`
  font-size:1.6em;
  color: ${MAIN_COLOR};
  margin-left:20px;
  cursor:pointer;
`;
