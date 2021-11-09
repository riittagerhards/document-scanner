import React from 'react';

function Styleguide() {
  return (
    <div>
      <h1>Headline 1</h1>
      <h2>Headline 2</h2>
      <h3>Headline 3</h3>
      <h4>Headline 4</h4>
      <h5>Headline 5</h5>
      <p>Paragraph</p>
      <div
        style={{
          display: 'flex',
          gap: 5,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            background: 'var(--color-primary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 40,
            height: 40,
            background: 'var(--color-secondary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 40,
            height: 40,
            background: 'var(--color-contrast-primary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 40,
            height: 40,
            background: 'var(--color-contrast-secondary)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            width: 40,
            height: 40,
            background: 'var(--color-background)',
            borderRadius: '50%',
            border: 'solid black 1px',
          }}
        />
      </div>
      <p
        style={{
          width: 150,
          height: 23,
          color: 'var(--color-text-primary)',
          background: 'var(--color-secondary)',
          textAlign: 'center',
        }}
      >
        color-text-primary
      </p>
      <p
        style={{
          width: 150,
          height: 23,
          background: 'var(--color-primary)',
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
        }}
      >
        color-text-secondary
      </p>
      <p
        style={{
          width: 150,
          height: 23,
          background: 'var(--color-contrast-primary)',
          color: 'var(--color-text-secondary)',
          textAlign: 'center',
          borderRadius: 'var(--border-radius)',
        }}
      >
        border-radius
      </p>
    </div>
  );
}

export default Styleguide;
