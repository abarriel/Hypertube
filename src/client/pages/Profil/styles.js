import styled from 'styled-components';

export const ProfilContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:calc(100vw - 85px);
  margin-left:65px;
`;

export const ProfilHeader = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 25px;
  margin-top:90px;
`;

export const ProfilContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left:25px;
`;

export const Avatar = styled.div`
  display:flex;
  width:120px;
  height:120px;
  border-radius:100%;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
`;
