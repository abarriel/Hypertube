import styled from 'styled-components';
import MdCreate from 'react-icons/lib/md/create';
import { Link } from 'react-router-dom';

export const ProfilContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:calc(100vw - 85px);
  margin-left:65px;
  margin-bottom:25px;
`;

export const ProfilHeader = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 25px;
  margin-top:90px;
  @media (max-width: 570px) {
    flex-wrap:wrap;
  };
`;

export const ProfilContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Avatar = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-width:120px;
  min-height:120px;
  max-width:120px;
  max-height:120px;
  border-radius:2px;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;
  cursor:pointer;
`;

export const Name = styled.p`
  color:white;
  font-size:2.1em;
  color:white;
  margin:0;
  margin-left:30px;
  user-select: none;
  font-weight:0;
  font-family: Helvetica Neue;
  @media (max-width: 570px) {
    margin-left:0px;
    min-width:400px;
  };
`;

export const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`;

export const Label = styled.div`
  margin:0;
  color: white;
  font-weight: 0;
  min-width:50px;
  margin-right: 15px;
  font-size: 1em;
  @media (min-width: 1000px) {
    font-size: 1.2em;
  }
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`;

export const Text = styled.div`
  margin:0;
  color: #828282;
  font-size: 0.8em;
  @media (min-width: 1000px) {
    font-size: 1.2em;
  }
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
  display:flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilElem = styled.div`
  display:flex;
  margin-top:10px;
`;

export const EditProfilButton = styled(Link)`
  text-decoration:none;
`;

export const EditProfilLogo = styled(MdCreate)`
  color:white;
  position:absolute;
  top:100px;
  left:calc(100vw - 100px);
  font-size:1.7em;
  cursor:pointer;
  &:hover{
    color: #828282;
  }
`;

export const Shadow = styled.div`
  display:flex;
  width:100%;
  padding-top:25px;
  background-color:black;
  margin-bottom:25px;
`;

export const UpdateAvatarLogo = styled(MdCreate)`
  color:white;
  font-size:1.7em;
`;
