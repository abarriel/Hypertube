import styled from 'styled-components';

export const MyListContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:100vw;
  min-height:calc(100vh - 85px);
  margin-top:25px;
  margin-bottom:50px;
`;

export const Title = styled.p`
  color:white;
  cursor:default;
  display:block;
  font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size:31.95px;
  height:38px;
  margin-top:0;
  line-height:38.34px;
  margin-right:15px;
  text-size-adjust:100%;
  user-select:none;
  white-space:nowrap;
  width:75.7656px;
  -webkit-box-direction:normal;
  -webkit-font-smoothing:antialiased;
  margin-top:65px;
  padding: 0 60px;
`;

export const MoviePreviewContainer = styled.div`
  display:flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap:wrap;
  width:92%;
  padding-left:4%;
  padding-right:4%;
  @media (max-width: 400px) {
    padding:0;
    width:100%;
  };
  overflow:hidden;
`;

export const MoviePreviewContent = styled.div`
  postion:relative;
  @media (max-width: 400px) {
    width:100%;
    height:150vw;
    margin:0;
  };
`;
