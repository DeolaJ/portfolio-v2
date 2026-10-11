import React, { FC, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

import Global from '../global';
import EnvelopeReveal from '../celebration/envelope-reveal';
import InvitationCard from '../celebration/invitation-card';
import JoinSection from '../celebration/join-section';
import NoteSection from '../celebration/note-section';
import { markRevealSeen, REVEAL_ATTRIBUTE, shouldPlayReveal } from '../celebration/reveal';

type RevealMode = 'pending' | 'envelope' | 'done';

const NamingCeremony: FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mode, setMode] = useState<RevealMode>('pending');
  const [revealed, setRevealed] = useState(false);
  const [overlayKey, setOverlayKey] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    if (shouldPlayReveal()) {
      root.setAttribute(REVEAL_ATTRIBUTE, '');
      setMode('envelope');
    } else {
      root.removeAttribute(REVEAL_ATTRIBUTE);
      setMode('done');
      setRevealed(true);
    }
    return () => root.removeAttribute(REVEAL_ATTRIBUTE);
  }, []);

  const handleOpened = useCallback(() => {
    setRevealed(true);
    markRevealSeen();
  }, []);

  const handleFinished = useCallback(() => {
    document.documentElement.removeAttribute(REVEAL_ATTRIBUTE);
    setMode('done');
  }, []);

  const replay = () => {
    document.documentElement.setAttribute(REVEAL_ATTRIBUTE, '');
    setRevealed(false);
    setOverlayKey((key) => key + 1);
    setMode('envelope');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-custom-linen text-custom-purple">
      <Global />
      {mode !== 'done' && (
        <EnvelopeReveal
          key={overlayKey}
          active={mode === 'envelope'}
          onOpened={handleOpened}
          onFinished={handleFinished}
        />
      )}

      <motion.main initial="initial" animate={revealed ? 'animate' : 'initial'}>
        <InvitationCard />
        <JoinSection />
        <NoteSection />
      </motion.main>

      <footer className="px-4 pb-12 text-sm text-center text-gray-600">
        <p>
          {'Made with love by '}
          <Link href="/">
            <a className="font-semibold underline text-custom-purple">Adeola</a>
          </Link>
        </p>
        {!shouldReduceMotion && mode === 'done' && (
          <button
            type="button"
            onClick={replay}
            className="p-0 mt-3 font-semibold underline bg-transparent border-0 cursor-pointer text-custom-rose">
            Open the envelope again
          </button>
        )}
      </footer>
    </div>
  );
};

export default NamingCeremony;
