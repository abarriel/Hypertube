import styled from 'styled-components';
import GoPlus from 'react-icons/lib/go/plus';

export const AddListButtonContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.4);
  border-color: #ff0a16;
  font-size: 1vw;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .75em;
  padding: .57em 1.35em;
  color: #fff;
  border: 1px solid rgba(255,255,255,.4);
  width:150px;
  height:30px;
  text-decoration:none;
  cursor:pointer;
`;

export const AddLogo = styled(GoPlus)`
  font-size:40px;
  margin-right:5px;
  @media (max-width: 1399px) {
    font-size: 1.8vw;
  };
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
`;
