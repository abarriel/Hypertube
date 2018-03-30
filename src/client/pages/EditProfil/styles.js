import styled from 'styled-components';

export const EditProfilContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  width:100vw;
  min-height:100vh;
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
  margin-top:140px;
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
  user-select: none;
`;

export const Label = styled.div`
  cursor: default;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 1em;
  font-weight: 400;
  color: #333;
  user-select: none;
  margin-bottom:3px;
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
  transition: background-color 0.3s ease-in-out;
  &:hover{
    background-color:#ff0a16;
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
