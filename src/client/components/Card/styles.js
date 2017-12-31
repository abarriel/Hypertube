import styled from 'styled-components';

import { LIGHT_GREY } from '../../colors';

export const CardContainer = styled.div`
  display:flex;
  width:${({ width = '500px' }) => width};
  height:${({ height = '200px' }) => height};
  background-color:${LIGHT_GREY};
  margin:${({ margin = '5px' }) => margin};
  border-radius:3px;
`;
