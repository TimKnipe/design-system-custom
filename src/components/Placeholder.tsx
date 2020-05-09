import React from 'react';

export interface PlaceholderProps {
  height: string | number;
  width?: string | number;
  label?: string;
  shape?: 'rectangle' | 'round';
}

const resolveToPxIfUnitless = (value: string | number) =>
  typeof value === 'string' && /[0-9]$/.test(value) ? `${value}px` : value;

// No CSS-in-JS dependency. Deliberately using inline styles.
export const Placeholder = ({
  label,
  width = '100%',
  height = 120,
  shape = 'rectangle',
}: PlaceholderProps) => {
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid 1px #ccc',
        backgroundColor: '#eee',
        width: resolveToPxIfUnitless(width),
        height: resolveToPxIfUnitless(height),
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          border: 0,
          fontSize: '100%',
        }}
      >
        <line
          style={{ strokeWidth: 2, stroke: 'hsla(0, 0%, 20%, 0.1)' }}
          x1={0}
          y1={0}
          x2="100%"
          y2="100%"
        />
        <line
          style={{ strokeWidth: 2, stroke: 'hsla(0, 0%, 20%, 0.1)' }}
          x1="100%"
          y1={0}
          x2={0}
          y2="100%"
        />
      </svg>

      {label && (
        <div style={{ position: 'absolute' }}>
          <div
            style={{
              color: 'hsla(0, 0%, 20%, 0.3)',
              backgroundColor: '#eee',
              padding: '0.1rem',
            }}
          >
            {label}
          </div>
        </div>
      )}
    </div>
  );
};
