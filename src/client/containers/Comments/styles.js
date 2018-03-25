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
  max-height:500px;
  background-color:black;
  overflow-x:scroll;
`;

export const PostCommentContainer = styled.div`
  position:relative;
  dislay:flex;
  justify-content: center;
  align-items: flex-start;
  f
  width:100%;
  margin-bottom:70px;
  flex-wrap: no-wrap;
`;

export const Avatar = styled.div`
  position:absolute;
  width:44px;
  height:44px;
  margin:0;
  border-radius:2px;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;
  margin-left:50px;
`;

export const InputStyled = styled.input`
  margin-left:130px;
  width: 50%;
  max-width: 100%;
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
  z-index: 30;
  border: solid 1px ${({ error }) => error ? 'rgb(176, 5, 0)' : '#b3b3b3'};
  background-color: white;
  &:focus{
    outline:none;
    border: solid 1px ${({ error }) => error ? 'rgb(176, 5, 0)' : '#626262'};
  }
`;

export const Comment = styled.div`
  display:flex;
  width:100%;
  min-height:20px;
  background-color:red;
  margin-bottom:5px;
`;

export const SendButton = styled.div`
  position:absolute;
  right:25px;
  top:0;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.4);
  border-color: #ff0a16;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .75em;
  color: #fff;
  border: 1px solid rgba(255,255,255,.4);
  transition:0.3s ease-in-out;
  &:hover {
    border-color:rgba(255,255,255,.8);
  }
  width:150px;
  height:42px;
  text-decoration:none;
  cursor:pointer;
`;
