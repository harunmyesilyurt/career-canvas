import React, { useEffect } from 'react';

 export function useScrollSpy() {
  useEffect(() => {
    const handleScroll = () => {
         
      const sections = document.querySelectorAll('section');
      let scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          document.querySelectorAll('nav ul li a').forEach((a) => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === section.getAttribute('id')) {
              a.classList.add('active');
            }
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
 
