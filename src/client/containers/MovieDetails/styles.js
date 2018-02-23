import styled from 'styled-components';

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
  position: fixed;
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
  width: 80%;
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

export const ButtonsContainer = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-start;
  align-items: center;
  margin-top:25px;
  margin-bottom:25px;
`;

export const DetailsContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left:25px;
  width:calc(100% - 25px);
`;

export const MetaListContainer = styled.div`
  margin: 20px 0 0 0;
  font-size: 1.275vw;
  color: #999;
  line-height: 1.3;
  user-select: none;
  cursor: default;
`;

export const MetaListRow = styled.div`
  position:relative;
  display:flex;
  flex-direction:raw;
  width:100%;
  margin-top:2px;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`;

export const MetaListTitle = styled.p`
  margin:0;
  color: #828282;
  font-weight: 700;
  margin-right: 5px;
  font-size: .9em;
`;

export const MetaListElem = styled.p`
  margin:0;
  color: #828282;
  font-weight: 0;
`;

export const Synopsis = styled.p`
  margin:0;
  margin-top:25px;
  font-size: 1.125vw;
  color: #999;
  line-height: 1.3;
  user-select: none;
  cursor: default;
`;
