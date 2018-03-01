import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  width:100vw;
  min-height:100vh;
`;

export const FormContainer = styled.form`
  position: relative;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-start;
  min-width: 410px;
  color: red;
  background-color: red;
  margin-bottom: 10px;
  background-color: #f3f3f3;
  color: #333;
  padding:40px;
  height:600px;
  -webkit-font-smoothing:antialiased;
`;

export const InputContainer = styled.div`
  position: relative;
  width:100%;
  padding-bottom: 24px;
  margin-bottom: 6px;
`;

export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
  font-weight: 400;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
`;

export const Label = styled.div`
  cursor: default;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 1em;
  font-weight: 400;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  margin-top: 3px;
  padding: 10px 11px;
  height: 44px;
  color: rgb(0, 0, 0);
  cursor: text;
  font-weight:400;
  font-size: 16px;
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
  border: solid 1px #b3b3b3;
`;

export const ButtonContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction:column;
  width:100%;
  flex:1;
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
  width: 100%;
  max-width: 100%;
  padding: 16px;
  font-size: 18px;
  background: #e50914;
  height: 53px;
  color:white;
  border: 0;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 0.1px;
  -webkit-appearance: button;
  user-select: none;
  margin-top:9px;
  margin-bottom:9px;
`;

export const Logo = styled.div`
  display:flex;
  width:200px;
  min-height:100px;
  align-self:flex-start;
  margin-left:25px;
  margin-bottom:50px;
  background-image:url('logo.png');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ForgetPasswordLink = styled(Link)`
  text-decoration: none;
  color: #0080ff;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const Spliter = styled.div`
  display:flex;
  width:100%;
  margin-top:0.5em;
  margin-bottom:0.5em;
  background-color: #ccc;
  height: 1px;
`;

export const OmniauthContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-start;
  width:100%;
`;

export const OmniauthLogo = styled.div`
  display:flex;
  min-width: 27px;
  min-height: 27px;
  margin-right: 10px;
  background-image:url('${({ logo }) => logo}');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const OmniauthLink = styled.div`
  display:flex;
  margin-top:10px;
  margin-bottom:10px;
  justify-content: flex-start;
  align-items: center;
  color: #0080ff;
  cursor: pointer;
  font-size: 16px;
`;

export const RegisterLinkContainer = styled.div`
  display:flex;
  width:100%;
  color: #333;
  font-size: 16px;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
`;

export const RegisterLink = styled(Link)`
  text-decoration: none;
  color: #0080ff;
  font-size: 16px;
  margin-left:4px;
  &:hover{
    text-decoration:underline;
  }
`;
