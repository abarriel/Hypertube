import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  position:absolute;
  display:flex;
  width:100%;
  left:0;
  min-height: ${({ height }) => height}vh;
  transition:1s;
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
  position:relative;
  display:flex;
  width:100%;
  left:0;
  background-image:url('${({ image }) => image}');
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 400px) {
    min-height: ${({ height }) => height}vh;
  };
  background-size: auto 100%;
  @media (min-width: 1650px) {
    background-size: 100% auto;
  };
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
