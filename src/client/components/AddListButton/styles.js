import styled from 'styled-components';
import GoPlus from 'react-icons/lib/go/plus';
import MdRemove from 'react-icons/lib/md/remove';

export const AddListButtonContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,.4);
  border-color: #ff0a16;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: .75em;
  padding: .57em 1.35em;
  color: #fff;
  border: 1px solid rgba(255,255,255,.4);
  transition:0.3s ease-in-out;
  &:hover {
    border-color:rgba(255,255,255,.8);
  }
  width:150px;
  height:30px;
  text-decoration:none;
  cursor:pointer;
`;

export const AddLogo = styled(GoPlus)`
  font-size:40px;
  margin-right:5px;
  @media (max-width: 1399px) {
    font-size: 1em;
  };
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
`;

export const RemoveLogo = styled(MdRemove)`
  font-size:40px;
  margin-right:5px;
  @media (max-width: 1399px) {
    font-size: 1em;
  };
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
`;
