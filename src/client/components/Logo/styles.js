import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoContainer = styled(Link)`
  position:${({ position }) => position}%;
  display:flex;
  justify-content: center;
  align-items: center;
  height:${({ height }) => height}%;
  width:${({ width }) => width}px;
  transition: all 0.3s ease-in-out;
  @media (max-width: 900px) {
    width:${({ width }) => width - 40}px;
    margin-right: 25px;
  };
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
