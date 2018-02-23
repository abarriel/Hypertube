import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PlayButtonContainer = styled(Link)`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: #e50914;
  border-color: #ff0a16;
  font-size: 1vw;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .75em;
  padding: .57em 1.35em;
  color: #fff;
  border: 1px solid rgba(255,255,255,.4);
  width:150px;
  height:30px;
  text-decoration:none;
`;

