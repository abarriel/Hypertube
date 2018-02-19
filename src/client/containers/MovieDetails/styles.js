import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  position:absolute;
  display:flex;
  width:100%;
  left:0;
  min-height: ${({ height }) => height}vh;
  transition:1s;
  background-color:black;
  z-index:4000;
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
  display:flex;
  width:100vw;
  height:100%;
  z-index:3000;
`;

export const CoverImage = styled.div`
  display:flex;
  width:100%;
  left:0;
  min-height: ${({ height }) => height}vh;
  background-image:url('${({ image }) => image}');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  z-index:7000;
`;
