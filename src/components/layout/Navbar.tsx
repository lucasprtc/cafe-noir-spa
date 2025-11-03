'use client';

import { useState, useEffect } from 'react';
import { useLenis } from '../ScrollSmooth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [windowHeight, setWindowHeight] = useState<number>(0)
  const lenis = useLenis();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    setWindowHeight(window.innerHeight)
    const checkSize = () => {
      setIsDesktop(window.innerHeight >= 768);
    };

    checkSize(); // Vérifie au montage
    window.addEventListener('resize', checkSize);

    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // ✅ Fonction pour scroller vers une section avec Lenis
  
  // ✅ Gestion du scroll
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, offset: number) => {
        e.preventDefault();
        
        if (!lenis) return;
        
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            lenis.scrollTo(targetElement, { offset: offset, duration: 1 });
        }
        toggleMenu();
    };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Seulement sur desktop
  //     if (window.innerWidth >= 1024) {
  //       const currentScrollY = window.scrollY;

  //       if (currentScrollY > lastScrollY && currentScrollY > 75) {
  //         // Scroll vers le bas
  //         setIsVisible(false);
  //       } else {
  //         // Scroll vers le haut
  //         setIsVisible(true);
  //       }

  //       setLastScrollY(currentScrollY);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [lastScrollY]);

  const menuItems = [
    { label: 'About', href: '#home', offset: isDesktop ? windowHeight : windowHeight + 390 },
    { label: 'Menu', href: '#menu', offset: isDesktop ? -24 : -96 },
    { label: 'Localisation', href: '#localisation', offset: isDesktop ? 0 : -96 },
    { label: 'Contact', href: '#contact', offset: -30 },
  ];

  return (
    <>
      <nav
        className={`bg-dark-blue mx-4 fixed border-2 border-almond bottom-4 lg:bottom-4 lg:mx-8 left-0 right-0 z-50 transition-all duration-300
          h-fit ${isVisible ? 'translate-y-0' : '-translate-y-full'} rounded-[10px]`}
      >
        
        <div className="container-grid">
                    {/* Mobile Menu */}
          <div
            className={`${isOpen ? 'h-60 pt-5' : 'h-0'} block md:hidden bg-dark-blue transition-all overflow-hidden`}
          >
            {menuItems.map((item, index) => (
              <div
                key={item.href}
                className={`${isOpen ? 'translate-y-0' : 'translate-y-10'} transition-transform duration-200`}
              >
                <a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href, item.offset)}
                  className="text-almond font-primary text-xl"
                >
                  {item.label}
                </a>
                {index < menuItems.length - 1 && (
                  <div className="border-b-2 border-gray-300 my-2" />
                )}
              </div>
            ))}
          </div>
          <div className="grid-layout items-center grid-gap h-16">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, '#home', 0)}
              className="col-span-2 lg:col-span-1 text-2xl font-bold text-blue-600"
            >
              <img src="/About/logo.svg" alt="logo" className="pb-2" />
            </a>

            {/* Desktop Menu */}
            <div className="hidden col-span-4 col-start-9 grid-gap justify-items-center lg:grid grid-cols-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href, item.offset)}
                  className="text-almond hover:text-light-orange font-primary transition-colors duration-200 text-lg"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="col-span-1 col-start-6 md:col-start-12 flex items-center justify-end lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-almond hover:text-blue-600 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`hidden inset-0 bg-black bg-opacity-20 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`left-0 top-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="text-2xl font-bold text-blue-600 mb-8">MonLogo</div>
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href, item.offset)}
                  className="block text-gray-700 hover:text-blue-600 text-lg transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}