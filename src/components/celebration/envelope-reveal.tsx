import React, { FC, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import { EnvelopeScene } from './envelope-scene';
import LoadingBloom from './loading-bloom';
import { REVEAL_ATTRIBUTE } from './reveal';

const LOAD_TIMEOUT_MS = 4000;

// Hidden unless the boot script (or the page) opted this visit into the envelope.
const Overlay = styled.div`
  html:not([${REVEAL_ATTRIBUTE}]) & {
    display: none;
  }
`;

type EnvelopeRevealProps = {
  active: boolean;
  onOpened: () => void;
  onFinished: () => void;
};

const EnvelopeReveal: FC<EnvelopeRevealProps> = ({ active, onOpened, onFinished }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const hintRef = useRef<HTMLParagraphElement>(null);
  const sceneRef = useRef<EnvelopeScene | null>(null);
  const pendingOpen = useRef(false);
  const callbacks = useRef({ onOpened, onFinished });
  const [ready, setReady] = useState(false);
  const [passThrough, setPassThrough] = useState(false);

  callbacks.current = { onOpened, onFinished };

  useEffect(() => {
    if (!active) return undefined;
    let cancelled = false;
    const previousOverflow = document.body.style.overflow;
    const releaseScroll = () => {
      document.body.style.overflow = previousOverflow;
    };
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const skip = () => {
      releaseScroll();
      callbacks.current.onOpened();
      callbacks.current.onFinished();
    };
    // Past this, a slow connection gets the page instead of waiting longer on the 3D code.
    const giveUp = window.setTimeout(skip, LOAD_TIMEOUT_MS);

    import('./envelope-scene')
      .then(({ createEnvelopeScene }) =>
        createEnvelopeScene({
          canvas: canvasRef.current,
          backdrop: backdropRef.current,
          chrome: [labelRef.current],
          hint: hintRef.current,
          autoOpenAfter: 2.8,
          onOpened: () => callbacks.current.onOpened(),
          onFaded: () => {
            releaseScroll();
            setPassThrough(true);
          },
          onFinished: () => callbacks.current.onFinished(),
        })
      )
      .then((scene) => {
        window.clearTimeout(giveUp);
        if (cancelled) {
          scene.dispose();
          return;
        }
        sceneRef.current = scene;
        setReady(true);
        if (pendingOpen.current) scene.open();
      })
      .catch(() => {
        // No WebGL, or the chunk failed to load: go straight to the page.
        window.clearTimeout(giveUp);
        if (!cancelled) skip();
      });

    return () => {
      cancelled = true;
      window.clearTimeout(giveUp);
      releaseScroll();
      if (sceneRef.current) sceneRef.current.dispose();
      sceneRef.current = null;
    };
  }, [active]);

  const open = () => {
    if (sceneRef.current) sceneRef.current.open();
    else pendingOpen.current = true;
  };

  return (
    <Overlay
      className="fixed inset-0 z-50"
      style={{ pointerEvents: passThrough ? 'none' : 'auto' }}>
      <div ref={backdropRef} className="absolute inset-0 bg-custom-linen" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
      {!ready && <LoadingBloom />}
      {!passThrough && (
        <>
          <button
            type="button"
            onClick={open}
            aria-label="Open the invitation"
            className="absolute inset-0 w-full h-full bg-transparent border-0 cursor-pointer focus:outline-none"
          />
          <p
            ref={labelRef}
            className="absolute inset-x-0 px-6 text-xs font-semibold tracking-widest text-center text-gray-600 uppercase pointer-events-none"
            style={{ top: '14%' }}>
            For our family and friends
          </p>
          <p
            ref={hintRef}
            className="absolute inset-x-0 text-2xl italic text-center opacity-0 pointer-events-none font-display text-custom-navy"
            style={{ bottom: '14%' }}>
            Tap to open
          </p>
        </>
      )}
    </Overlay>
  );
};

export default EnvelopeReveal;
