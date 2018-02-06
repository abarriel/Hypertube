import React from 'react';

import {
  FakePreviewContainer,
  FakePreviewElem,
} from './styles';
import { tab } from './tab';

const FakePreview = () => (
  <FakePreviewContainer>
    {tab.map(elem => <FakePreviewElem key={elem.id} />)}
  </FakePreviewContainer>
);

export default FakePreview;
