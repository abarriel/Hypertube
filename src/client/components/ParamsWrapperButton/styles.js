import styled from 'styled-components';

import FaSortDesc from 'react-icons/lib/fa/sort-desc';

export const ParamsWrapperButtonContainer = styled.div`
  position:relative;
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
  margin:0;
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
