import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.div`
  position:absolute;
  display:flex;
  width:100vw;
  left:0;
  min-height: ${({ height }) => height}vh;
  transition:0.3s ease-in-out;
  z-index:4000;
  overflow:hidden;
`;

export const FakeMovieDetailsContainer = styled.div`
  display:flex;
  width:100%;
  min-height:${({ height }) => height}vh;
  transition:1s;
  margin-top:25px;
  margin-bottom:50px;
`;

export const Closer = styled.div`
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  display:flex;
  width:100vw;
  height:100%;
  z-index:3000;
`;

export const CoverImage = styled.div`
  position:absolute;
  margin-top:-${({ height }) => height / 3}vh;
  width:100vw;
  bottom:0;
  top:0;
  right:0;
  max-height:${({ height }) => height}vh;
  background-image:url('${({ image }) => image}');
  background-size:100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index:4500;
`;

export const Title = styled.p`
  margin:0;
  margin-left:30px;
  margin-top:30px;
  user-select: none;
  font-size: 3vw;
  color: white;
  font-weight: 0;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`;

export const Shadow = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: space-around;
  bottom:0;
  top:0;
  width: 50%;
  background-image: linear-gradient(to right,#000,transparent);
  z-index:5000;
`;

export const GradientShadow = styled.div`
  position:relative;
  display:flex;
  bottom:0;
  top:0;
  width: 100%;
  z-index:5000;
`;

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
