import React, { FC, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import Countdown from './countdown';
import { riseIn, staggerFrom } from './motion';
import { SectionTitle } from '../partials/section';
import {
  NAMING_CEREMONY,
  NAMING_CEREMONY_CALENDAR_EVENT,
  ZoomDetails,
} from '../../constants/naming-ceremony';
import { useCopyToClipboard } from '../../hooks/use-copy-to-clipboard';
import { useNow } from '../../hooks/use-now';
import { getGoogleCalendarUrl } from '../../utils/calendar';

type Phase = 'upcoming' | 'live' | 'ended';

const STARTS_AT = new Date(NAMING_CEREMONY.startsAt);
const ENDS_AT = new Date(NAMING_CEREMONY.endsAt);
const GOOGLE_CALENDAR_URL = getGoogleCalendarUrl(NAMING_CEREMONY_CALENDAR_EVENT);
const ICS_URL = '/api/celebration/naming-ceremony-calendar';

const COPY: Record<Phase, { label: string; heading: string; body: string }> = {
  upcoming: {
    label: 'Join us online',
    heading: 'Pull up a chair, wherever you are',
    body: 'We’re celebrating on Zoom so family and friends can join us from anywhere in the world.',
  },
  live: {
    label: 'Happening now',
    heading: 'We’re live on Zoom',
    body: 'The ceremony has started. Come on in, we’re so glad you’re here.',
  },
  ended: {
    label: 'Thank you',
    heading: 'Thank you for celebrating with us',
    body: 'Your love, prayers and kind words mean the world to us and our little girl.',
  },
};

const primaryClass =
  'flex items-center justify-center w-full px-6 py-4 text-base font-bold text-white transition-colors rounded-sm bg-custom-navy hover:bg-opacity-90';
const secondaryClass =
  'flex items-center justify-center px-5 py-3.5 font-semibold transition-colors bg-transparent border rounded-sm cursor-pointer border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white';
const textButtonClass =
  'p-0 text-sm font-semibold underline bg-transparent border-0 cursor-pointer text-custom-rose';

const getPhase = (now: Date | null): Phase => {
  if (!now || now < STARTS_AT) return 'upcoming';
  return now < ENDS_AT ? 'live' : 'ended';
};

// Only shown when the guest's clock isn't on GMT+1 on the day.
const getLocalStartTime = (): string | null => {
  if (STARTS_AT.getTimezoneOffset() === -60) return null;
  const sameDay = String(STARTS_AT.getDate()) === NAMING_CEREMONY.date.day;
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
    ...(sameDay ? {} : { weekday: 'long' }),
  }).format(STARTS_AT);
};

const VideoIcon: FC = () => (
  <svg viewBox="0 0 32 32" className="w-8 h-8 mx-auto text-custom-rose" aria-hidden="true">
    <rect
      x="3"
      y="8"
      width="18"
      height="16"
      rx="2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path d="M21 13.5 29 9v14l-8-4.5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CopyRow: FC<{ label: string; value: string }> = ({ label, value }) => {
  const [copied, copy] = useCopyToClipboard();

  return (
    <div className="flex items-center justify-between py-3 border-t border-custom-edge">
      <dt className="text-xs font-semibold tracking-widest text-gray-600 uppercase">{label}</dt>
      <dd className="flex items-center">
        <span className="font-semibold tabular-nums">{value}</span>
        <button type="button" onClick={() => copy(value)} className={`${textButtonClass} ml-4`}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </dd>
    </div>
  );
};

const ZoomPanel: FC<{ zoom: ZoomDetails; phase: Phase }> = ({ zoom, phase }) => {
  if (!zoom.url) {
    return (
      <div className="p-6 mt-10 border border-dashed rounded-sm md:p-8 border-custom-edge bg-custom-paper">
        <VideoIcon />
        <p className="mt-3 text-2xl font-semibold font-display text-custom-navy">
          The Zoom link will appear here
        </p>
        <p className="mt-2 text-sm leading-relaxed md:text-base">
          {phase === 'live'
            ? 'It’s on its way. Refresh this page in a moment.'
            : 'We’ll add it before the ceremony, so there’s no need to wait for a message. Save this page and check back any time before we start.'}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 mt-10 border rounded-sm md:p-8 border-custom-edge bg-custom-paper">
      <a href={zoom.url} target="_blank" rel="noopener noreferrer" className={primaryClass}>
        Join on Zoom
      </a>
      {(zoom.meetingId || zoom.passcode) && (
        <dl className="mt-6 text-left">
          {zoom.meetingId && <CopyRow label="Meeting ID" value={zoom.meetingId} />}
          {zoom.passcode && <CopyRow label="Passcode" value={zoom.passcode} />}
        </dl>
      )}
      <p className="mt-4 text-sm leading-relaxed">
        Joining from the Zoom app instead? Use the meeting ID and passcode.
      </p>
    </div>
  );
};

const JoinSection: FC = () => {
  const reduce = useReducedMotion();
  const now = useNow();
  const phase = getPhase(now);
  const copy = COPY[phase];
  const mounted = now !== null;
  const localStartTime = useMemo(() => (mounted ? getLocalStartTime() : null), [mounted]);
  const [linkCopied, copyLink] = useCopyToClipboard();

  const sharePage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Our baby girl’s naming ceremony',
          url: NAMING_CEREMONY.pageUrl,
        });
      } catch (error) {
        // Closing the sheet is an AbortError; anything else means sharing isn't allowed here.
        if (error.name !== 'AbortError') copyLink(NAMING_CEREMONY.pageUrl);
      }
      return;
    }
    copyLink(NAMING_CEREMONY.pageUrl);
  };

  return (
    <section id="join" className="px-4 py-16 sm:px-8 md:py-24">
      <motion.div
        variants={staggerFrom(0.6, 0.08)}
        custom={reduce}
        className="max-w-xl mx-auto text-center">
        <SectionTitle>{copy.label}</SectionTitle>
        <motion.h3
          variants={riseIn}
          custom={reduce}
          className="max-w-xs mx-auto text-4xl font-semibold leading-tight md:max-w-md font-display md:text-5xl text-custom-navy">
          {copy.heading}
        </motion.h3>
        <motion.p
          variants={riseIn}
          custom={reduce}
          className="mt-4 text-base leading-relaxed md:text-lg">
          {copy.body}
        </motion.p>

        {phase === 'upcoming' && (
          <motion.div variants={riseIn} custom={reduce}>
            <p className="mt-6 text-base leading-relaxed">
              {'Starts at '}
              <strong>
                {NAMING_CEREMONY.date.time} {NAMING_CEREMONY.hostTimeZone}
              </strong>
              {localStartTime ? (
                <>
                  {', which is '}
                  <strong>{localStartTime}</strong>
                  {' where you are.'}
                </>
              ) : (
                '.'
              )}
            </p>
            <Countdown now={now} target={STARTS_AT} />
          </motion.div>
        )}

        {phase !== 'ended' && (
          <motion.div variants={riseIn} custom={reduce}>
            <ZoomPanel zoom={NAMING_CEREMONY.zoom} phase={phase} />
          </motion.div>
        )}

        {phase === 'upcoming' && (
          <motion.div variants={riseIn} custom={reduce} className="mt-12">
            <p className="text-base leading-relaxed">
              Add it to your calendar. The reminder links straight back to this page.
            </p>
            <div className="grid gap-3 mt-5 sm:grid-cols-2">
              <a
                href={GOOGLE_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={secondaryClass}>
                Google Calendar
              </a>
              <a href={ICS_URL} className={secondaryClass}>
                Apple or Outlook
              </a>
            </div>
            <button type="button" onClick={sharePage} className={`${textButtonClass} mt-6`}>
              {linkCopied ? 'Link copied' : 'Share this page'}
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default JoinSection;
