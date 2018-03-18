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
  align-items: flex-start;
  margin-bottom: 25px;
  margin-top:90px;
`;

export const ProfilContent = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Avatar = styled.div`
  display:flex;
  min-width:120px;
  min-height:120px;
  border-radius:2px;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: 105%;
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
