import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center border-t border-gray-300 mt-auto">
      <p>&copy; {new Date().getFullYear()} Мой Сайт. Все права защищены.</p>
    </footer>
  );
};

export default Footer;