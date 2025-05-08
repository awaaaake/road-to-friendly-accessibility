import { css } from '@emotion/react';
import { createContext, useRef, useContext } from 'react';

const AccessibilityContext = createContext<{
  assertiveRef: React.RefObject<HTMLDivElement>;
  politeRef: React.RefObject<HTMLDivElement>;
} | null>(null);

export const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const assertiveRef = useRef<HTMLDivElement>(null);
  const politeRef = useRef<HTMLDivElement>(null);

  return (
    <AccessibilityContext.Provider value={{ assertiveRef, politeRef }}>
      <div ref={assertiveRef} aria-live="assertive" aria-atomic="true" css={visuallyHidden} />
      <div ref={politeRef} aria-live="polite" aria-atomic="true" css={visuallyHidden} />
      {children}
    </AccessibilityContext.Provider>
  );
};

export function useAccessibilityContext() {
  const context = useContext(AccessibilityContext);
  if (!context) throw new Error('useAnnouncer must be used within AccessibilityProvider');

  return context;
}

const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
