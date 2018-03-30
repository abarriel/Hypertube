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
  position:relative;
  dislay:flex;
  width:100%;
  flex:3;
  padding-top:50px;
  padding-bottom:50px;
  max-height:500px;
  background-color:black;
  overflow-x:hidden;
  overflow-y:scroll;
  margin-bottom:25px;
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

export const InputStyled = styled.textarea`
  margin-left:104px;
  width: 50%;
  width: 50%;
  resize:vertical;
  max-height: 300px;
  padding: 10px 11px;
  height: 44px;
  min-height: 44px;
  background-color: rgba(0,0,0,.4);
  border: 1px solid rgba(255,255,255,.4);
  cursor: text;
  font-weight:400;
  font-size: 16px;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  color:white;
  box-sizing: border-box;
  z-index: 30;
  &:focus{
    outline:none;
  };
  line-height: 1.4;
`;

export const Comment = styled.div`
  position:relative;
  display:flex;
  width:100%;
  min-height:40px;
  margin-top:7.5px;
  margin-bottom:7.5px;
  padding-bottom:10px;
`;

export const SendButton = styled.div`
  position:absolute;
  left:calc(114px + 50%);
  top:0;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.4);
  border-color: #ff0a16;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .75em;
  color:${({ activate }) => activate ? 'white' : 'grey'};
  border: 1px solid rgba(255,255,255,.4);
  transition:0.3s ease-in-out;
  &:hover {
    border-color:${({ activate }) => activate ? 'rgba(255,255,255,.8)' : 'rgba(255,255,255,.4)'};
  }
  width:150px;
  height:42px;
  user-select:none;
  text-decoration:none;
  cursor:pointer;
`;

export const CommentAvatar = styled.div`
  position:relative;
  min-width:44px;
  min-height:44px;
  max-width:44px;
  max-height:44px;
  margin:0;
  border-radius:2px;
  background-image:${({ avatar }) => `url(${avatar})`};
  background-size: 105%;
  background-position: center;
  background-repeat: no-repeat;
  margin-left:50px;
  background-color:grey;
`;

export const CommentText = styled.div`
  display:flex;
  color:white;
  justify-content: center;
  align-items: center;
  margin-left:25px;
  line-height: 1.4;
  padding-right:25px;
`;

export const BottomShadow = styled.div`
  position:absolute;
  top:-110px;
  display:flex;
  width:100%;
  height:85px;
  background-image: linear-gradient(to top,#000,transparent);
`;

export const TopShadow = styled.div`
  position:absolute;
  top:0px;
  display:flex;
  width:100%;
  height:85px;
  background-image: linear-gradient(to bottom,#000,transparent);
  z-index:10000;
`;

export const Separator = styled.div`
  position:absolute;
  display:flex;
  width:calc(70% - 50px);
  height:1px;
  margin-left:50px;
  bottom:0px;
  background-image:linear-gradient(to right,rgb(255,255,255),transparent);
`;
