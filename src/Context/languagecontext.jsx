// // components/LanguageContext.jsx

// 'use client';

// import { createContext, useContext, useEffect, useState } from 'react';

// // Create the Language Context
// const LanguageContext = createContext();

// // Language provider component
// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState('en'); // default to English

//   // Check for stored language preference on initial load
//   useEffect(() => {
//     const storedLanguage = localStorage.getItem('language');
//     if (storedLanguage) {
//       setLanguage(storedLanguage);
//     } else {
//       // Optionally detect user's preferred language from browser
//       const userLang = navigator.language.slice(0, 2); // Get the first 2 chars of the language (e.g. 'en', 'fr')
//       setLanguage(userLang);
//     }
//   }, []);

//   // Change the language
//   const changeLanguage = (lang) => {
//     setLanguage(lang);
//     localStorage.setItem('language', lang);
//   };

//   return (
//     <LanguageContext.Provider value={{ language, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Custom hook to use language context
// export const useLanguage = () => useContext(LanguageContext);
