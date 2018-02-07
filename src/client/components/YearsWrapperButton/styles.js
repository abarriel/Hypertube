import styled from 'styled-components';

import FaSortDesc from 'react-icons/lib/fa/sort-desc';
import MdClear from 'react-icons/lib/md/clear';

export const YearsButtonContainer = styled.div`
  position:absolute;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  height: 2rem;
  padding-left: 10px;
  line-height: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.7rem;
  font-weight: 700;
  box-sizing: border-box;
  border: 1px solid rgba(255,255,255,.9);
  display: inline-block;
  color: #fff;
  background-color: #000;
  -webkit-appearance: none;
  border-radius: 0;
  position: relative;
  padding-right: 50px;
  text-align: left;
  user-select: none;
  cursor: pointer;
  margin: 0 30px;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-wrap:no-wrap;
  &:hover {
    background-color:rgb(40,40,40);
  }
`;

export const Text = styled.p`
  margin-right:3px;
  font-size:1em;
`;

export const Values = styled.p`
  margin-left:3px;
  font-size:1em;
`;

export const Chev = styled(FaSortDesc)`
  position: absolute;
  right: 10px;
  top: 14%;
  line-height: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: .9rem;
  font-weight: 700;
  color: #fff;
`;

export const YearsWrapperContainer = styled.div`
  position:absolute;
  display:flex;
  flex-wrap:wrap;
  flex-direction:column;
  z-index: 2000;
  padding: 0;
  margin: 0;
  top: calc(2rem + 90px);
  left: 180px;
  opacity: 1;
  height:300px;
  width:300px;
  transition-duration: 150ms;
  background-color: rgba(0,0,0,.9);
  color: #fff;
  border: solid 1px rgba(255,255,255,.15);
  cursor: default;
`;

export const YearsWrapperOverlay = styled.div`
  position:absolute;
  display:flex;
  z-index: 1999;
  width:100vw;
  height:100vh;
  top:-90px;
  left:-180px;
`;

export const Value = styled.div`
  display:flex;
  padding: 1px 20px 1px 10px;
  height:26px;
  font-size:1.1em;
  -webkit-font-smoothing:antialiased;
  &:hover {
    text-decoration:${({ isAble }) => isAble ? 'underline' : 'none'};
  }
  font-family:
  font-size: 10px;
  font-weight:1;
  cursor:${({ isAble }) => isAble ? 'pointer' : 'default'};
  color: ${({ isAble }) => isAble ? 'white' : 'rgb(80,80,80)'};
`;

export const Title = styled.p`
  display:flex;
  margin-left:10px;
  justify-content: flex-start;
  align-items: center;
`;

export const Cross = styled(MdClear)`
  color:white;
  font-size:1.2em;
  margin-left:10px;
  margin-right:10px;
  color: ${({ canreset }) => canreset !== 'false' ? 'white' : 'black'};
`;
