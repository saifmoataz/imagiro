import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function CustomCursor() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(pointer: fine)');
    // Only show custom cursor on devices with fine pointer (like mouse)
    if (!mql.matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    // For link and button hover effects
    const onLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') || 
        target.closest('button') ||
        target.role === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setLinkHovered(true);
      }
    };

    const onLinkHoverEnd = () => {
      setLinkHovered(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    
    document.addEventListener('mouseover', onLinkHoverStart);
    document.addEventListener('mouseout', onLinkHoverEnd);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', onLinkHoverStart);
      document.removeEventListener('mouseout', onLinkHoverEnd);
    };
  }, [visible]);

  if (typeof window === 'undefined') return null;

  // Only render on desktop devices with mouse
  if (window.matchMedia('(pointer: coarse)').matches) return null;

  // Determine cursor color based on theme
  const cursorColor = theme === 'dark' ? 'white' : 'black';
  
  return (
    <div
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{
        transition: 'opacity 0.2s ease',
        opacity: visible ? 1 : 0,
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {/* Main dot cursor */}
      <div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: cursorColor,
          transition: 'transform 0.1s ease',
          transform: `scale(${clicked ? 0.5 : 1})`,
        }}
      ></div>
      
      {/* Cursor ring */}
      <div
        className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          width: linkHovered ? '48px' : '36px',
          height: linkHovered ? '48px' : '36px',
          border: `1px solid ${cursorColor}`,
          transitionProperty: 'width, height, opacity, transform',
          transitionDuration: '0.2s',
          transitionTimingFunction: 'ease-out',
          opacity: 0.5,
          transform: `scale(${clicked ? 1.2 : 1})`,
        }}
      ></div>
    </div>
  );
}