import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.form`
  position: relative;
  display: grid;
  width: 350px;
  color: red;
  height: 350px;
  // background-color: red;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  heigh: 100%;

  margin: auto;
  margin-bottom: 0px;
`;
export const ButtonContainer = styled.div`
  position:relative;
  display:grid;
  margin: auto;
  width: 90%;
  margin-bottom:30px;
`;

export const LinkStyled = styled(Link)`
  grid-area: register;
  padding: 12px 12px;
  cursor: pointer;
  user-select: none;
  transition: all 60ms ease-in-out;
  text-align: center;
  white-space: nowrap;
  text-decoration: none !important;
  text-transform: none;
  text-transform: capitalize;
  color: #fff;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
  justify-content: center;
  align-items: center;
  flex: 0 0 160px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  color: #FFFFFF;
  background: linear-gradient( 160deg, rgba(244, 92, 67, 0.7) -200%, #EA5555  200%);
  opacity: .95;
  &:hover {
    transition: all 60ms ease;
    opacity: .8;
    color: #fff;
  }
  &:active {
    transition: all 60ms ease;
    box-shadow: inset 5px 5px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const LostLink = styled(Link)`
    margin:auto;
`;

export const InputButton = styled.input`
    grid-area: inputbutton;
    min-width: 145px;
    padding: 12px 12px;
    cursor: pointer;
    user-select: none;
    transition: all 60ms ease-in-out;
    text-align: center;
    white-space: nowrap;
    text-decoration: none !important;
    text-transform: none;
    text-transform: capitalize;
    color: #fff;
    border: 0 none;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.3;
    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;
    justify-content: center;
    align-items: center;
    flex: 0 0 160px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    color: #FFFFFF;
    background: red;
    opacity: .95;
    &:hover {
     transition: all 60ms ease;
     opacity: .8;
    }
    &:active {
     transition: all 60ms ease;
      box-shadow: inset 5px 5px 2px rgba(0, 0, 0, 0.2);
    }
    &:focus {
        outline: none;
    }
`;
