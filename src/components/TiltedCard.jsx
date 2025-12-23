import { useRef, useState } from 'react';
import './TiltedCard.css';

const TiltedCard = ({
  imageSrc,
  altText = '',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '300px',
  imageHeight = '300px',
  imageWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.05,
  showMobileWarning = false,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent = null,
  children
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotateY = ((x - centerX) / centerX) * rotateAmplitude;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className="tilted-card-container"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div className="tilted-card-inner">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={altText}
            className="tilted-card-image"
            style={{
              height: imageHeight,
              width: imageWidth,
            }}
          />
        )}
        {children}
        {displayOverlayContent && overlayContent && (
          <div className="tilted-card-overlay">{overlayContent}</div>
        )}
        {showTooltip && captionText && isHovered && (
          <div className="tilted-card-tooltip">{captionText}</div>
        )}
      </div>
      {showMobileWarning && (
        <p className="tilted-card-mobile-warning">
          For best experience, view on desktop
        </p>
      )}
    </div>
  );
};

export default TiltedCard;
