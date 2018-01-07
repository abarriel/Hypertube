import styled from 'styled-components';
import GoChevronDown from 'react-icons/lib/go/chevron-down';

export const MiniAvatarContainer = styled.div`
  position:relative;
  width:40px;
  height:40px;
  border-radius:1px;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor:pointer;
  overflow:hidden;
`;

export const Shadow = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.2);
  transition:all 0.3s;
  opacity:${({ displayShadow }) => displayShadow ? 1 : 0};
`;

export const MiniAvatarPopOver = styled.div`
  display:flex;
`;

export const ChevDown = styled(GoChevronDown)`
  color:white;
  font-size:1.2em;
`;
