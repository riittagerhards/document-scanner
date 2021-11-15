import React from 'react';

type pageTitleProps = {
  header: string;
};

function PageTitle({ header }: pageTitleProps): JSX.Element {
  return <h1>{header}</h1>;
}

export default PageTitle;
