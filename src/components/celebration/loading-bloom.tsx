import React, { FC } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

import { FLORAL } from './palette';

const appear = keyframes`
  to {
    opacity: 1;
  }
`;

const breathe = keyframes`
  0%, 100% {
    transform: scale(0.55);
    opacity: 0.35;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Waits a beat before showing, so fast connections go straight to the envelope.
const Bloom = styled.svg`
  opacity: 0;
  animation: ${appear} 0.4s ease-out 0.3s forwards;

  .petal {
    transform-box: fill-box;
    transform-origin: 50% 100%;
    animation: ${breathe} 1.6s ease-in-out infinite;
  }
`;

const PETALS = 5;

const LoadingBloom: FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <Bloom viewBox="-24 -24 48 48" className="w-14 h-14" aria-hidden="true">
      {Array.from({ length: PETALS }, (_, i) => (
        <g key={i} transform={`rotate(${(360 / PETALS) * i})`}>
          <ellipse
            className="petal"
            cx="0"
            cy="-10"
            rx="6.5"
            ry="10"
            fill={FLORAL.blush}
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        </g>
      ))}
      <circle r="4.5" fill={FLORAL.navy} />
    </Bloom>
  </div>
);

export default LoadingBloom;
