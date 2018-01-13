import styled from 'styled-components';

export const LogoContainer = styled.div`
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  height:100%;
  width:130px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 900px) {
    width:90px;
    margin-right: 25px;
  }
  padding: 18px 0;
  cursor:pointer;
  margin-right: 5px;
`;

export const LogoImage = styled.div`
  display:flex;
  width:100%;
  height:100%;
  background-image:url('logo.png');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
