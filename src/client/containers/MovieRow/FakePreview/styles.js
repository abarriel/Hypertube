import styled from 'styled-components';
import {
  HEIGHT,
  WIDTH,
  MARGIN,
} from '../constants';

export const FakePreviewContainer = styled.div`
  display:flex;
`;

export const FakePreviewElem = styled.div`
  position:relative;
  display:flex;
  height:${HEIGHT}px;
  width:${WIDTH}px;
  z-index:100;
  margin:${MARGIN}px;
  margin-top:25px;
  border-radius:2px;
  overflow:hidden;
  background-color:rgba(150,150,150,0.1);
`;
