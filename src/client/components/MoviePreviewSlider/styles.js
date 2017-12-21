import styled from 'styled-components';

import { MAIN_COLOR } from '../../colors';

export const MoviePreviewSliderContainer = styled.div`
  position:relative;
  display:flex;
  width:calc(100vw - 85px);
  height:500px;
  margin-left:calc(-${({ position }) => 100 * position}vw + ${({ position }) => position > 0 ? 85 * position : 0}px);
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap:no-wrap;
  transition: margin-left 0.3s ease-in-out;
  background-color: rgb(20,20,20);
  box-shadow: 0 0 50px 1px rgba(0,0,0,0.7);
`;

export const MoviePreviewSliderImageContainer = styled.div`
  display:flex;
  justify-content: center;
  min-width:100%;
  height:100%;
`;

export const MoviePreviewSliderImage = styled.div`
  display:flex;
  width:100%;
  max-width:1500px;
  background-image:${({ coverImage }) => `url(${coverImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PagerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:calc(100vw - 85px);
  min-height:50px;
  margin-top:5px;
  margin-bottom:35px;
`;

export const PagerElem = styled.div`
  display:flex;
  height:11px;
  width:11px;
  border-radius: 100%;
  background-color:${MAIN_COLOR};
  transition: all 0.7s ease;
  margin-left:7px;
  margin-right:7px;
  transform: ${({ selected }) => selected ? 'scale(1.2)' : 'scale(1)'};
  opacity: ${({ selected }) => selected ? 0.8 : 0.2};
  cursor:pointer;
`;
