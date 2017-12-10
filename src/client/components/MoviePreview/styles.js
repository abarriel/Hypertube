import styled from 'styled-components';
import GoDiffAdded from 'react-icons/lib/go/diff-added';
import { Link } from 'react-router-dom';
import { MAIN_COLOR, MAIN_COLOR_HOVER } from '../../colors';

export const LinkStyed = styled(Link)`
  text-decoration:none;
`;

export const MoviePreviewContainer = styled.div`
  display:flex;
  width:270px;
  height:400px;
  background-color:rgb(45,45,45);
  border-radius:2px;
  margin:10px;
  transition: all 0.2s ease;
  cursor: pointer;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Shadow = styled.div`
  positon:relative;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: flex-start;
  width:calc(100% - 50px);
  height:calc(100% - 50px);
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.8));  30%);
  padding:25px;
`;

export const Title = styled.p`
  color:rgb(240,240,240);
  margin:0;
  font-size:1em;
`;

export const PlayLogo = styled(GoDiffAdded)`
  position:absolute;
  color:${MAIN_COLOR};
  font-size:3em;
  margin-top:140px;
  margin-left:90px;
  &:hover {
    color:${MAIN_COLOR_HOVER};
  }
`;
