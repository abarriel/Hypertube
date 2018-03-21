import styled from 'styled-components';

export const CommentsContainer = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  width:100vw;
  left:0;
  max-height: ${({ height }) => height}vh;
  min-height:600px;
  transition:height 0.5s ease-in-out;
  z-index:4000;
  overflow:hidden;
  background-color:black;
`;

export const CommentsContent = styled.div`
  dislay:flex;
  width:100%;
  flex:4;
`;

export const PostCommentContainer = styled.div`
  position:relative;
  dislay:flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction:row;
  width:100%;
  flex:2;
`;

export const Avatar = styled.div`
  width:70px;
  height:70px;
  border-radius:2px;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;
  margin-left:50px;
`;

export const InputStyled = styled.input`
  width: 50%;
  max-width: 100%;
  margin-top: 3px;
  padding: 10px 11px;
  height: 44px;
  color: rgb(0, 0, 0);
  cursor: text;
  font-weight:400;
  font-size: 16px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  border-radius: 2px;
  box-sizing: border-box;
  position: relative;
  z-index: 30;
  border: solid 1px ${({ error }) => error ? 'rgb(176, 5, 0)' : '#b3b3b3'};
  background-color: white;
  &:focus{
    outline:none;
    border: solid 1px ${({ error }) => error ? 'rgb(176, 5, 0)' : '#626262'};
  }
`;
