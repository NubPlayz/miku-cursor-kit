import { useEffect, useRef } from 'react';
import './miku-cursor.css';
import cursorDefault from './assets/cursor-default-hd.png';
import cursorHover from './assets/cursor-hover-hd.png';


const CLICKABLE_SELECTOR = [
  'a[href]',
  'button',
  'summary',
  'label',
  'label[for]',
  'input[type="button"]',
  'input[type="submit"]',
  'input[type="reset"]',
  'input[type="checkbox"]',
  'input[type="radio"]',
  'input[type="file"]',
  'select',
  '[role="button"]',
  '[onclick]',
  '.miku-file-label',
  '.miku-cursor-hover-state',
  '.miku-code-toggle',
  '.miku-code-copy',
  '.cursor-pointer',
  '[class*="cursor-pointer"]',
  '[data-clickable="true"]',
  '[tabindex]:not([tabindex="-1"])'
].join(', ');

const NATIVE_CURSOR_SELECTOR = [
  'select',
  'option',
  'input[type="date"]',
  'input[type="time"]',
  'input[type="color"]',
  'input[type="file"]',
  '[data-native-cursor="true"]'
].join(', ');

function isClickableTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  const candidate = target.closest(CLICKABLE_SELECTOR);
  if (!candidate) return false;
  if ('disabled' in candidate && candidate.disabled) return false;
  if (candidate.getAttribute('aria-disabled') === 'true') return false;
  return getComputedStyle(candidate).pointerEvents !== 'none';
}

function isNativeCursorTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest(NATIVE_CURSOR_SELECTOR));
}

export function MikuCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia('(pointer: fine)').matches) return;

    document.documentElement.classList.add('miku-cursor-kit-active');

    let rafId = 0;
    let targetX = window.innerWidth * 0.5;
    let targetY = window.innerHeight * 0.5;
    let currentX = targetX;
    let currentY = targetY;
    const easing = 0.22;
    const hotspotX = 25;
    const hotspotY = 5;
    let usingNativeCursor = false;

    const setHoverState = isHover => {
      cursor.classList.toggle('is-hover', isHover);
    };

    const syncHoverState = (x, y) => {
      const element = document.elementFromPoint(x, y);
      usingNativeCursor = isNativeCursorTarget(element);
      cursor.classList.toggle('is-native', usingNativeCursor);
      if (usingNativeCursor) {
        setHoverState(false);
        cursor.style.opacity = '0';
        return;
      }
      cursor.style.opacity = '1';
      setHoverState(isClickableTarget(element));
    };

    const onMouseMove = event => {
      targetX = event.clientX;
      targetY = event.clientY;
      syncHoverState(event.clientX, event.clientY);
    };

    const onMouseDown = () => cursor.classList.add('is-down');
    const onMouseUp = () => cursor.classList.remove('is-down');
    const onWindowBlur = () => {
      cursor.style.opacity = '0';
    };
    const onDocumentLeave = () => {
      cursor.style.opacity = '0';
    };
    const onDocumentEnter = () => {
      cursor.style.opacity = usingNativeCursor ? '0' : '1';
    };

    const animate = () => {
      currentX += (targetX - currentX) * easing;
      currentY += (targetY - currentY) * easing;
      const drawX = Math.round(currentX - hotspotX);
      const drawY = Math.round(currentY - hotspotY);
      cursor.style.transform = `translate3d(${drawX}px, ${drawY}px, 0)`;
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    window.addEventListener('blur', onWindowBlur);
    document.addEventListener('mouseleave', onDocumentLeave);
    document.addEventListener('mouseenter', onDocumentEnter);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('blur', onWindowBlur);
      document.removeEventListener('mouseleave', onDocumentLeave);
      document.removeEventListener('mouseenter', onDocumentEnter);
      document.documentElement.classList.remove('miku-cursor-kit-active');
    };
  }, []);

  return (
    <div ref={cursorRef} className="miku-cursor-kit" aria-hidden="true">
      <img
        src={cursorDefault?.src || cursorDefault}
        alt=""
        className="miku-cursor-kit-layer miku-cursor-kit-layer-default"
      />
      <img
        src={cursorHover?.src || cursorHover}
        alt=""
        className="miku-cursor-kit-layer miku-cursor-kit-layer-hover"
      />


    </div>
  );
}

export default MikuCursor;
