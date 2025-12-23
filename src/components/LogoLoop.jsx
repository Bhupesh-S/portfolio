import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './LogoLoop.css';

const LogoLoop = ({
  logos = [],
  speed = 100,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel'
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const isHorizontal = direction === 'left' || direction === 'right';


  // Calculate animation duration based on speed (speed is now duration in seconds)
  const currentSpeed = isHovered && hoverSpeed !== undefined ? hoverSpeed : speed;
  const currentDuration = currentSpeed === 0 ? 0 : currentSpeed;

  // Duplicate logos multiple times for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className={`logo-loop-container ${isHorizontal ? 'horizontal' : 'vertical'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label={ariaLabel}
    >
      {fadeOut && (
        <>
          <div
            className={`fade-gradient ${direction === 'left' || direction === 'up' ? 'start' : ''} ${
              direction === 'right' || direction === 'down' ? 'end' : ''
            }`}
            style={{
              background: isHorizontal
                ? `linear-gradient(to ${direction === 'left' ? 'right' : 'left'}, ${fadeOutColor} 0%, transparent 100%)`
                : `linear-gradient(to ${direction === 'up' ? 'bottom' : 'top'}, ${fadeOutColor} 0%, transparent 100%)`,
            }}
          />
        </>
      )}

      <div
        className={`logo-loop-track ${isHorizontal ? 'horizontal' : 'vertical'}`}
        style={{
          animation: !prefersReducedMotion && currentDuration > 0 
            ? `scroll-${direction} ${currentDuration}s linear infinite` 
            : 'none'
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="logo-item"
            style={{
              [isHorizontal ? 'marginRight' : 'marginBottom']: `${gap}px`,
              height: `${logoHeight}px`,
            }}
            whileHover={
              !prefersReducedMotion && scaleOnHover
                ? { scale: 1.15, transition: { duration: 0.2 } }
                : {}
            }
            whileTap={{ scale: 0.95 }}
          >
            {logo.href ? (
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="logo-link"
                aria-label={logo.title || logo.alt}
              >
                {logo.node ? (
                  <div className="logo-icon" style={{ fontSize: `${logoHeight}px` }}>
                    {logo.node}
                  </div>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-image"
                    style={{ height: `${logoHeight}px` }}
                  />
                )}
              </a>
            ) : (
              <>
                {logo.node ? (
                  <div className="logo-icon" style={{ fontSize: `${logoHeight}px` }}>
                    {logo.node}
                  </div>
                ) : (
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="logo-image"
                    style={{ height: `${logoHeight}px` }}
                  />
                )}
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
