import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100vw;
  min-height:100vh;
`;

export const LogoContainer = styled.div`
  position:absolute;
  top:0;
  left:0;
`;

export const FormContainer = styled.form`
  position: relative;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  width: 350px;
  color: red;
  height: 350px;
  background-color: red;
  justify-content: center;
  align-items: center;

  margin-bottom: 10px;
  min-width: 380px;
  background-color: #f3f3f3;
  color: #333;
  padding:40px;
  height:487px;
  -webkit-font-smoothing:antialiased;
`;

export const InputContainer = styled.div`
  position: relative;
  width:100%;
  padding-bottom: 24px;
  margin-bottom: 6px;
`;

export const Label = styled.div`

`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  margin-top: 3px;
  padding: 10px 11px;
  height: 44px;
  color: rgb(0, 0, 0);
  cursor: text;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  border-radius: 2px;
  box-sizing: border-box;
  position: relative;
  z-index: 30;
  background-color:rgb(250, 255, 189);
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
