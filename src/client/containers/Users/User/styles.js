import styled from 'styled-components';

export const UserContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  widht:100%;
  flex-wrap:wrap;
  min-height:50px;
  margin-top:15px;
`;

export const Avatar = styled.div`
  display:flex;
  min-width:40px;
  min-height:40px;
  max-width:40px;
  max-height:40px;
  border-radius:2px;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;
  margin-right:15px;
  margin-bottom:10px;
`;

export const Section = styled.div`
  display:flex;
  height:100%;
  min-width:150px;
  max-width:150px;
  overflow:hidden;
  margin-left:10px;
  margin-right:10px;
`;

export const Label = styled.div`
  margin:0;
  color: white;
  font-weight: 0;
  min-width:50px;
  margin-right: 5px;
  font-size: 1em;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
`;

export const Text = styled.div`
  margin:0;
  color: #828282;
  font-size: 0.8em;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
  display:flex;
  justify-content: center;
  align-items: center;
`;
