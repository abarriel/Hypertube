import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MdChevronLeft from 'react-icons/lib/md/chevron-left';

export const LostContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  min-width:100vw;
  min-height:100vh;
  background-image:url("https://assets.nflxext.com/ffe/siteui/acquisition/login/login-the-crown_2-1500x1000.jpg");
  @media (max-width: 740px) {
    background-color: #f3f3f3;
    align-items: flex-start;
    background-image:none;
  };
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const FormContainer = styled.form`
  position: relative;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-start;
  min-width: 370px;
  max-width: 370px;
  color: red;
  background-color: red;
  margin-bottom: 10px;
  background-color: #f3f3f3;
  color: #333;
  padding:40px;
  padding-bottom:60px;
  -webkit-font-smoothing:antialiased;
  @media (max-width: 740px) {
    min-width: 200px;
    width:calc(100vw - 80px);
    padding-top:20px;
    max-width:1000px;
  };
  margin-bottom:50px;
`;

export const Logo = styled.div`
  display:flex;
  width:200px;
  min-height:75px;
  align-self:flex-start;
  margin-left:25px;
  background-image:url('/logo.png');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Header = styled.div`
  display:flex;
  width:100%;
  height: 75px;
  margin-bottom:25px;
  @media (max-width: 740px) {
    background-color: #fafafa;
    border-bottom: solid 1px #dcdde0;
    margin-bottom:15px;
  };
`;

export const Title = styled.div`
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
  font-weight: 400;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  user-select: none;
`;

export const Text = styled.div`
  margin-top:1em;
  margin-bottom:1em;
  color: #333;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
`;

export const ButtonContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction:column;
  width:100%;
  flex:1;
`;

export const InputButton = styled.button`
  width: 100%;
  max-width: 100%;
  padding: 16px;
  font-size: 18px;
  background: #0080ff;
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
  transition: background-color 0.3s ease-in-out;
  &:hover{
    background-color:#0080ff;
  };
  &:disabled,
  button[disabled]{
    opacity:0.8;
    cursor:default;
  };
  &:focus{
    outline:none;
  };
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: #0080ff;
  font-size: 16px;
  margin-left:4px;
  &:hover{
    text-decoration:underline;
  };
  margin-top:20px;
`;

export const BackIcon = styled(MdChevronLeft)`
  color: #0080ff;
`;

export const InputContainer = styled.div`
  position: relative;
  width:100%;
  padding-bottom: 24px;
  margin-bottom: 6px;
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
  border: solid 1px ${({ error }) => error ? 'rgb(176, 5, 0)' : '#b3b3b3'};
  background-color: white;
  &:focus{
    outline:none;
    border: solid 1px ${({ error }) => error ? 'rgb(176, 5, 0)' : '#626262'};
  }
`;

export const ErrorMessageContainer = styled.div`
  position:absolute;
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;;
  width:100%;
  height:20px;
`;

export const ErrorMessage = styled.p`
  color: #b00500;
  font-size: 12px;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
`;
