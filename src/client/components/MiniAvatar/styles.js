import styled from 'styled-components';
import GoChevronDown from 'react-icons/lib/go/chevron-down';

export const MiniAvatarContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  min-width:60px;
`;

export const MiniAvatarImage = styled.div`
  position:relative;
  width:35px;
  height:35px;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor:pointer;
  overflow:hidden;
  @media (max-width: 900px) {
    width:40px;
    height:40px;
  }
`;

export const MiniAvatarPopOver = styled.div`
  display:flex;
`;

export const ChevDown = styled(GoChevronDown)`
  color:white;
  font-size:1em;
`;
