import styled from 'styled-components';

export const MoviePreviewContainer = styled.div`
  display:flex;
  width:250px;
  height:380px;
  background-color:rgb(45,45,45);
  border-radius:2px;
  margin:20px;
  transition: all 0.2s ease;
  cursor: pointer;
  background-image: url(http://static1.purebreak.com/articles/6/42/74/6/@/127325-affiche-de-le-saison-2-de-walking-dead-950x0-3.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
      margin-top:18px;
  }
`;

export const Shadow = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.4);
  padding:10px;
`;

export const Title = styled.p`
  color:rgb(240,240,240);
  margin:0;
  font-size:1em;
`;
