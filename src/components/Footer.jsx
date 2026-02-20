import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Копирайт */}
        <div className="text-sm">
          © {new Date().getFullYear()} tsi. Все права не защищены.
        </div>
      </div>
    </footer>
  );
};