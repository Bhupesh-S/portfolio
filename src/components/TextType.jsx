import { useState, useEffect } from 'react';

const TextType = ({ 
  text = [], 
  typingSpeed = 100, 
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = '|'
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (text.length === 0) return;

    const fullText = text[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Finished typing, pause before deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % text.length);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, text, typingSpeed, pauseDuration]);

  return (
    <span>
      {currentText}
      {showCursor && (
        <span style={{ opacity: cursorVisible ? 1 : 0 }}>
          {cursorCharacter}
        </span>
      )}
    </span>
  );
};

export default TextType;
