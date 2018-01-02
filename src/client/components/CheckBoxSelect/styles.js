import styled from 'styled-components';
import { MAIN_COLOR } from '../../colors';
import GoCheck from 'react-icons/lib/go/check';

export const CheckBoxSelectContainer = styled.div`
  display:flex;
  width:100%;
  min-height:50px;
`;

export const CheckBoxElem = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: flex-start;
  align-items: center;
  display:flex;
  width:100%;
`;

export const CheckBoxElemLabel = styled.p`
  background: -webkit-linear-gradient(#eee, rgba(255,255,255,0.6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
`;

export const CheckBoxContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  margin-left:25px;
`;

export const CheckBoxLabel = styled.p`
  background: -webkit-linear-gradient(#eee, rgba(255,255,255,0.6));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  user-select: none;
`;

export const CheckBoxContent = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:13px;
  height:13px;
  border-radius: 3px;
  border-style:solid;
  border-width:2px;
  border-color:${MAIN_COLOR};
  cursor:pointer;
  margin-left:10px;
  margin-right:10px;
`;

export const CheckedIcon = styled(GoCheck)`
  color:${MAIN_COLOR};
`;
