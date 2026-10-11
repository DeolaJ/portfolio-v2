import React, { FC } from 'react';

const UNITS: [string, number][] = [
  ['Days', 86400000],
  ['Hours', 3600000],
  ['Minutes', 60000],
  ['Seconds', 1000],
];

type CountdownProps = {
  now: Date | null;
  target: Date;
};

const Countdown: FC<CountdownProps> = ({ now, target }) => {
  let remaining = now ? Math.max(0, target.getTime() - now.getTime()) : null;
  const parts = UNITS.map(([label, size]) => {
    if (remaining === null) return { label, value: null };
    const value = Math.floor(remaining / size);
    remaining -= value * size;
    return { label, value };
  });
  const [days, hours, minutes] = parts;

  return (
    <div className="mt-10">
      {now && (
        <p className="sr-only">
          {`Starts in ${days.value} days, ${hours.value} hours and ${minutes.value} minutes.`}
        </p>
      )}
      <dl
        aria-hidden="true"
        className="grid max-w-md grid-cols-4 mx-auto divide-x divide-custom-edge">
        {parts.map(({ label, value }) => (
          <div key={label} className="flex flex-col-reverse items-center px-1 py-2">
            <dt className="mt-2 text-xs font-semibold tracking-wider text-gray-600 uppercase">
              {label}
            </dt>
            <dd className="text-5xl font-semibold leading-none font-display lining-nums tabular-nums text-custom-navy">
              {value === null ? '\u00a0' : String(value).padStart(2, '0')}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Countdown;
