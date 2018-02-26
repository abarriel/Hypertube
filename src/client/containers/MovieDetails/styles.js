import styled from 'styled-components';
import YouTube from 'react-youtube';
import MdClose from 'react-icons/lib/md/close';

export const MovieDetailsContainer = styled.div`
  position:absolute;
  display:flex;
  width:100vw;
  left:0;
  max-height: ${({ height }) => height}vh;
  transition:height 0.5s ease-in-out;
  z-index:4000;
  overflow:hidden;
  padding-bottom:100px;
`;

export const FakeMovieDetailsContainer = styled.div`
  display:flex;
  width:100%;
  min-height:${({ height }) => height}vh;
  transition:0.5s ease-in-out;
  margin-top:25px;
  margin-bottom:50px;
`;

export const Closer = styled.div`
  position: fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  width:100vw;
  height:100%;
  z-index:3000;
`;

export const CoverImage = styled.div`
  position:absolute;
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
  margin-top:70px;
  user-select: none;
  color: white;
  font-size: 2.5em;
  @media (max-width: 1399px) {
    font-size: 2em;
  };
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
`;

export const Shadow = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: space-around;
  bottom:0;
  top:0;
  width: 100%;
  z-index:5000;
  padding: 18px 0 12px 4%;
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
  margin-top:20px;
  width:calc(100% - 25px);
`;

export const MetaListContainer = styled.div`
  margin: 20px 0 0 0;
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
  font-size: 0.7em;
  @media (min-width: 1000px) {
    font-size: 1.2em;
  }
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`;

export const MetaListElem = styled.p`
  margin:0;
  color: #828282;
  font-size: 0.7em;
  @media (min-width: 1000px) {
    font-size: 1.2em;
  }
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
`;

export const Synopsis = styled.p`
  margin:0;
  margin-top:25px;
  margin-bottom:25px;
  color: #999;
  line-height: 1.3;
  user-select: none;
  cursor: default;
  font-size: 0.7em;
  @media (min-width: 1000px) {
    font-size: 1.2em;
  }
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
`;

export const MetaDataContainer = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-start;
  align-items: center;
`;

export const MetaDataRating = styled.p`
  font-weight: 700;
  margin-right: .5em;
  color: ${({ color }) => color};
  white-space: nowrap;
  max-width: 300px;
`;

export const MetaDataYears = styled.p`
  margin-right: .5em;
  font-weight: 700;
  color: #666;
`;

export const FakeShadowContainer = styled.div`
  position:absolute;
  bottom:0;
  top:0;
  right:0;
  left:0;
  display:flex;
  z-index:5000;
`;

export const FakeShadowLeft = styled.div`
  position:relative;
  background-color:black;
  width:30%
`;

export const FakeShadowRight = styled.div`
  position:relative;
  background-image: linear-gradient(to right,#000,transparent);
  width:70%;
`;

export const YouTubeContainer = styled(YouTube)`
  position:absolute;
  right:0;
`;

export const Cross = styled(MdClose)`
  position:absolute;
  right:40px;
  top:20px;
  color:white;
  font-size:2em;
  z-index:6000;
  cursor:pointer;
`;

export const FooterContainer = styled.div`
  postion:absolute;
  display:flex;
  height:200px;
  background-color:red;
  right:0;
  left:0;
  z-index:10000;
`;
