import styled from 'styled-components';

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

export const FormContainer = styled.div`
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
  padding-bottom:60px;
  -webkit-font-smoothing:antialiased;
  @media (max-width: 740px) {
    min-width: 200px;
    width:calc(100vw - 80px);
    padding-top:20px;
  };
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
