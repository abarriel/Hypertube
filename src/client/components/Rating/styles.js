import styled from 'styled-components';

export const RatingContainer = styled.div`
  display:flex;
  justify-content: space-around;
  align-items: center;
  width:100%;
  height:30px;
  opacity: ${({ opacity }) => opacity};
  transition: all 1.3s;
  transition-delay: 1.4s;
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
