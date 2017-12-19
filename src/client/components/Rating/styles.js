import styled from 'styled-components';

export const RatingContainer = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height:70px;
  opacity: ${({ opacity }) => opacity};
`;

export const Full = styled.div`
  width:18px;
  height:18px;
  border-radius:100px;
  background-color:white;
`;

export const Empty = styled.div`
  width:15px;
  height:15px;
  border-radius:100px;
  border-style: solid;
  border-width: 3px;
  border-color:white;
`;
