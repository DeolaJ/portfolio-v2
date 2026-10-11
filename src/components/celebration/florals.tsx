import React, { FC, PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { bloom, drawOn, staggerFrom } from './motion';
import { FLORAL } from './palette';

// Server and browser trig can differ in the last digit, which breaks hydration.
const round = (value: number): number => Math.round(value * 1000) / 1000;

type PlaceProps = {
  x: number;
  y: number;
  rotate?: number;
  originX?: number;
  originY?: number;
};

// The outer group positions the shape; the inner one blooms around the shape's own anchor.
const Place: FC<PropsWithChildren<PlaceProps>> = ({
  x,
  y,
  rotate = 0,
  originX = 0.5,
  originY = 0.5,
  children,
}) => {
  const reduce = useReducedMotion();

  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <motion.g variants={bloom} custom={reduce} style={{ originX, originY }}>
        {children}
      </motion.g>
    </g>
  );
};

type LeafProps = { length: number; width: number; fill: string; vein: string };

const Leaf: FC<LeafProps> = ({ length: l, width: w, fill, vein }) => (
  <>
    <path
      d={`M0 0 C ${l * 0.3} ${-w} ${l * 0.72} ${-w} ${l} 0 C ${l * 0.72} ${w} ${
        l * 0.3
      } ${w} 0 0 Z`}
      fill={fill}
    />
    <path
      d={`M${l * 0.06} 0 Q ${l * 0.5} ${-w * 0.08} ${l * 0.9} 0`}
      stroke={vein}
      strokeWidth={1.3}
      strokeLinecap="round"
      fill="none"
    />
    {[0.28, 0.48, 0.68].map((t) => (
      <path
        key={t}
        d={`M${l * t} 0 L ${l * (t + 0.12)} ${-w * 0.48} M${l * t} 0 L ${l * (t + 0.12)} ${
          w * 0.48
        }`}
        stroke={vein}
        strokeWidth={1}
        strokeLinecap="round"
        fill="none"
      />
    ))}
  </>
);

type FlowerProps = {
  r: number;
  petals: number;
  fill: string;
  line: string;
  center: string;
  dots?: string;
};

const Flower: FC<FlowerProps> = ({ r, petals, fill, line, center, dots }) => (
  <>
    {Array.from({ length: petals }, (_, i) => (
      <g key={i} transform={`rotate(${(360 / petals) * i})`}>
        <path
          d={`M0 0 C ${-0.64 * r} ${-0.2 * r} ${-0.6 * r} ${-r} 0 ${-r} C ${0.6 * r} ${-r} ${
            0.64 * r
          } ${-0.2 * r} 0 0 Z`}
          fill={fill}
        />
        <path
          d={`M0 ${-0.32 * r} Q ${-0.14 * r} ${-0.6 * r} ${-0.1 * r} ${-0.84 * r} M0 ${
            -0.32 * r
          } Q ${0.14 * r} ${-0.6 * r} ${0.1 * r} ${-0.84 * r}`}
          stroke={line}
          strokeWidth={1.2}
          strokeLinecap="round"
          fill="none"
        />
      </g>
    ))}
    <circle r={r * 0.27} fill={center} />
    {dots &&
      [0, 72, 144, 216, 288].map((angle) => (
        <circle
          key={angle}
          cx={round(Math.cos((angle * Math.PI) / 180) * r * 0.13)}
          cy={round(Math.sin((angle * Math.PI) / 180) * r * 0.13)}
          r={r * 0.045}
          fill={dots}
        />
      ))}
  </>
);

type RoseProps = { r: number; fill: string; line: string; center: string };

const Rose: FC<RoseProps> = ({ r, fill, line, center }) => (
  <>
    <circle r={r} fill={fill} />
    <path
      d={`M${-0.78 * r} ${0.12 * r} A ${0.74 * r} ${0.74 * r} 0 1 1 ${0.42 * r} ${0.66 * r}
        M${-0.52 * r} ${-0.08 * r} A ${0.5 * r} ${0.5 * r} 0 1 1 ${0.12 * r} ${0.48 * r}
        M${-0.28 * r} ${-0.18 * r} A ${0.28 * r} ${0.28 * r} 0 1 1 ${-0.05 * r} ${0.26 * r}`}
      stroke={line}
      strokeWidth={2}
      strokeLinecap="round"
      fill="none"
    />
    <circle r={r * 0.15} fill={center} />
  </>
);

const SPECKLES = [
  [0, 0, 5, 20],
  [9, -4, 4.5, -10],
  [-8, -6, 4, 40],
  [2, -12, 4.5, 0],
  [12, -15, 4, 30],
  [-4, -20, 4, -20],
  [8, -25, 3.6, 10],
  [0, -31, 3.4, 40],
  [-9, -14, 3.6, 0],
  [15, -6, 3.4, -30],
  [5, -37, 3, 0],
  [-6, -28, 3, 20],
  [14, -25, 3, 0],
];

const Speckles: FC<{ fill: string }> = ({ fill }) => (
  <>
    {SPECKLES.map(([cx, cy, rx, rotate]) => (
      <ellipse
        key={`${cx}-${cy}`}
        cx={cx}
        cy={cy}
        rx={rx}
        ry={rx * 0.62}
        transform={`rotate(${rotate} ${cx} ${cy})`}
        fill={fill}
      />
    ))}
  </>
);

const BERRIES = [
  [16, -14, 4],
  [38, -6, 4.2],
  [52, 8, 4],
  [44, 20, 4.4],
  [22, -4, 3],
  [31, 0, 3.2],
  [46, 13, 3],
];

const Berries: FC = () => (
  <>
    <path
      d="M0 0 Q 22 6 44 20 M14 4 Q 18 -6 16 -14 M28 10 Q 36 2 38 -6 M36 15 Q 46 14 52 8"
      stroke={FLORAL.stem}
      strokeWidth={1.4}
      strokeLinecap="round"
      fill="none"
    />
    {BERRIES.map(([cx, cy, r]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill={FLORAL.navy} />
    ))}
  </>
);

const stemProps = {
  stroke: FLORAL.stem,
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  fill: 'none',
};

type FloralProps = { className?: string; delay?: number };

export const FloralCorner: FC<FloralProps> = ({ className, delay = 0 }) => {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 260 260"
      className={className}
      overflow="visible"
      aria-hidden="true"
      variants={staggerFrom(delay)}
      custom={reduce}>
      <motion.path
        variants={drawOn}
        custom={reduce}
        d="M0 96 C 52 100, 112 126, 170 182"
        {...stemProps}
      />
      <motion.path
        variants={drawOn}
        custom={reduce}
        d="M74 0 C 84 42, 104 72, 140 98"
        {...stemProps}
      />
      <motion.path
        variants={drawOn}
        custom={reduce}
        d="M150 0 C 160 18, 176 30, 204 40"
        {...stemProps}
      />

      <Place x={0} y={44} rotate={30} originX={0}>
        <Leaf length={150} width={32} fill={FLORAL.slate} vein={FLORAL.slateVein} />
      </Place>
      <Place x={36} y={0} rotate={64} originX={0}>
        <Leaf length={124} width={26} fill={FLORAL.sage} vein={FLORAL.sageVein} />
      </Place>
      <Place x={118} y={-4} rotate={98} originX={0}>
        <Leaf length={74} width={18} fill={FLORAL.leaf} vein={FLORAL.leafVein} />
      </Place>
      <Place x={0} y={150} rotate={-6} originX={0}>
        <Leaf length={98} width={20} fill={FLORAL.leaf} vein={FLORAL.leafVein} />
      </Place>
      <Place x={150} y={14} rotate={14} originX={0}>
        <Leaf length={72} width={16} fill={FLORAL.sage} vein={FLORAL.sageVein} />
      </Place>
      <Place x={96} y={124} rotate={42} originX={0}>
        <Leaf length={64} width={15} fill={FLORAL.sage} vein={FLORAL.sageVein} />
      </Place>

      <Place x={200} y={64} rotate={62}>
        <Speckles fill={FLORAL.blush} />
      </Place>
      <Place x={98} y={150} rotate={20} originX={0} originY={0.43}>
        <Berries />
      </Place>

      <Place x={46} y={46} rotate={10}>
        <Flower
          r={50}
          petals={6}
          fill={FLORAL.blush}
          line={FLORAL.blushLine}
          center={FLORAL.seed}
          dots={FLORAL.cream}
        />
      </Place>
      <Place x={140} y={58}>
        <Flower
          r={30}
          petals={5}
          fill={FLORAL.navy}
          line={FLORAL.navyLine}
          center={FLORAL.cream}
          dots={FLORAL.seed}
        />
      </Place>
      <Place x={26} y={134}>
        <Rose r={32} fill={FLORAL.peach} line={FLORAL.peachLine} center={FLORAL.seed} />
      </Place>
      <Place x={104} y={112} rotate={20}>
        <Flower r={18} petals={5} fill={FLORAL.sky} line={FLORAL.skyLine} center={FLORAL.navy} />
      </Place>
      <Place x={190} y={20} rotate={-10}>
        <Flower
          r={13}
          petals={5}
          fill={FLORAL.tea}
          line={FLORAL.teaLine}
          center={FLORAL.peachLine}
        />
      </Place>
    </motion.svg>
  );
};

export const FloralSprig: FC<FloralProps> = ({ className, delay = 0 }) => {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 200 80"
      className={className}
      overflow="visible"
      aria-hidden="true"
      variants={staggerFrom(delay)}
      custom={reduce}>
      <motion.path
        variants={drawOn}
        custom={reduce}
        d="M6 62 C 60 52, 120 32, 186 20"
        {...stemProps}
      />
      <Place x={40} y={55} rotate={-58} originX={0}>
        <Leaf length={34} width={9} fill={FLORAL.sage} vein={FLORAL.sageVein} />
      </Place>
      <Place x={62} y={50} rotate={32} originX={0}>
        <Leaf length={30} width={8} fill={FLORAL.leaf} vein={FLORAL.leafVein} />
      </Place>
      <Place x={98} y={40} rotate={-62} originX={0}>
        <Leaf length={30} width={8} fill={FLORAL.slate} vein={FLORAL.slateVein} />
      </Place>
      <Place x={118} y={35} rotate={28} originX={0}>
        <Leaf length={27} width={7} fill={FLORAL.sage} vein={FLORAL.sageVein} />
      </Place>
      <Place x={150} y={27} rotate={-60} originX={0}>
        <Leaf length={24} width={7} fill={FLORAL.leaf} vein={FLORAL.leafVein} />
      </Place>
      <Place x={188} y={19}>
        <Flower
          r={12}
          petals={5}
          fill={FLORAL.blush}
          line={FLORAL.blushLine}
          center={FLORAL.peachLine}
        />
      </Place>
    </motion.svg>
  );
};

const DIVIDER_LEAVES = [
  [92, 18, 215],
  [72, 20, 145],
  [50, 20, 215],
  [30, 19, 145],
  [148, 18, -35],
  [168, 20, 35],
  [190, 20, -35],
  [210, 19, 35],
];

export const FloralDivider: FC<FloralProps> = ({ className, delay = 0 }) => {
  const reduce = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 240 40"
      className={className}
      overflow="visible"
      aria-hidden="true"
      variants={staggerFrom(delay)}
      custom={reduce}>
      <motion.path
        variants={drawOn}
        custom={reduce}
        d="M108 20 C 82 16, 50 24, 14 18"
        {...stemProps}
      />
      <motion.path
        variants={drawOn}
        custom={reduce}
        d="M132 20 C 158 16, 190 24, 226 18"
        {...stemProps}
      />
      {DIVIDER_LEAVES.map(([x, y, rotate], i) => (
        <Place key={`${x}-${y}`} x={x} y={y} rotate={rotate} originX={0}>
          <Leaf
            length={18}
            width={5}
            fill={i % 2 ? FLORAL.sage : FLORAL.leaf}
            vein={i % 2 ? FLORAL.sageVein : FLORAL.leafVein}
          />
        </Place>
      ))}
      <Place x={120} y={20}>
        <Flower
          r={10}
          petals={5}
          fill={FLORAL.blush}
          line={FLORAL.blushLine}
          center={FLORAL.navy}
        />
      </Place>
    </motion.svg>
  );
};
