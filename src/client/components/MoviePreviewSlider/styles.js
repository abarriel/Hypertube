import styled from 'styled-components';

export const MoviePreviewSliderContainer = styled.div`
  display:flex;
  width:calc(100vw - 85px);
  height:500px;
  margin-left:calc(-${({ position }) => 100 * position}vw + ${({ position }) => position > 0 ? 85 * position : 0}px);
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap:no-wrap;
  margin-bottom:35px;
  transition: all 0.3s ease-in-out;
  background-color: rgb(20,20,20);
  z-index:10;
  box-shadow: 0 0 50px 1px rgba(0,0,0,0.7);
`;

export const MoviePreviewSliderImageContainer = styled.div`
  display:flex;
  min-width:100%;
  height:100%;
  z-index:20;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
