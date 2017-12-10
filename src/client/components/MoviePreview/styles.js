import styled from 'styled-components';
import GoDiffAdded from 'react-icons/lib/go/diff-added';
import { Link } from 'react-router-dom';

export const MoviePreviewContainer = styled(Link)`
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
  text-decoration:none;
`;

export const Shadow = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  width:100%;
  height:100%;
  background:linear-gradient( 220deg, rgba(0,0,0,0), rgba(0,0,0,0.8));  30%);
  padding:10px;
`;

export const Title = styled.p`
  color:rgb(240,240,240);
  margin:0;
  font-size:1em;
`;

export const PlayLogo = styled(GoDiffAdded)`
  align-self:center;
  color:white;
  font-size:3em;
  margin-top:140px;
`;
