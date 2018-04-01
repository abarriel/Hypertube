import styled from 'styled-components';
import MdWarning from 'react-icons/lib/md/warning';

export const EmptyListContainer = styled.div`
  display:flex;
  flex-direction: column;
  width:100%;
  justify-content: center;
  align-items: center;
  min-height:500px;
`;

export const EmptyIcon = styled(MdWarning)`
  color:white;
  font-size:5em;
  margin-bottom:20px;
`;

export const EmptyLabel = styled.p`
  color:white;
  font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;
  font-weight:0;
`;
