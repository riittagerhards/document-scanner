import React from 'react';
import DocPreview from './DocPreview';

export default {
  component: DocPreview,
  title: 'Components/DocPreview',
};

export const Kaugummis = (): JSX.Element => (
  <DocPreview
    title="Kaugummis"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aut placeat vel repellendus. Voluptates quos explicabo, alias quibusdam animi aut autem possimus laborum, officiis blanditiis modi consequuntur nobis soluta ea."
  />
);
