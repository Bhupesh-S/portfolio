import { useEffect, useRef } from 'react';
import './ClickSpark.css';

const ClickSpark = ({ 
  sparkColor = '#fff', 
  sparkSize = 10, 
  sparkRadius = 15, 
  sparkCount = 8,
  duration = 400,
  children 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create sparks
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.className = 'click-spark';
        
        const angle = (Math.PI * 2 * i) / sparkCount;
        const velocity = sparkRadius;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.width = `${sparkSize}px`;
        spark.style.height = `${sparkSize}px`;
        spark.style.backgroundColor = sparkColor;
        spark.style.setProperty('--tx', `${tx}px`);
        spark.style.setProperty('--ty', `${ty}px`);
        spark.style.setProperty('--duration', `${duration}ms`);

        container.appendChild(spark);

        // Remove spark after animation
        setTimeout(() => {
          spark.remove();
        }, duration);
      }
    };

    container.addEventListener('click', handleClick);
    return () => container.removeEventListener('click', handleClick);
  }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      {children}
    </div>
  );
};

export default ClickSpark;
