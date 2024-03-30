import { useState, useEffect, useRef } from 'react';

function useScrollVisibility() {
  const [elementVisible, setElementVisible] = useState(false);
  const textRef = useRef();
  const previousScrollY = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY.current) {
        setElementVisible(entry.isIntersecting);
      }
      previousScrollY.current = currentScrollY;
    });

    observer.observe(textRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { textRef, elementVisible };
}

export default useScrollVisibility;
