import styled from 'styled-components';
import GoHome from 'react-icons/lib/go/home';

export const SideMenuStyled = styled.div`
  position:fixed;
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: flex-start;
  left:0;
  top:0;
  width:85px;
  // background:linear-gradient( 160deg, #72EDF2, #5151E5  120%);
  background-color:rgb(20,20,20);
  height:100%;
`;

export const MenuElemStyled = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:75px;
  cursor:pointer;
`;

export const HomeIcon = styled(GoHome)`
  color:white;
  font-size:2em;
`;

export const Header = styled.div`
  height:225px;
`;
