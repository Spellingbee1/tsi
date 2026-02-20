import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Логотип / название сайта */}
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600 transition">
          Logo
        </Link>

        {/* Навигационные ссылки */}
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Главная
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            О нас
          </Link>
          <Link
            to="/Auth"
            className="text-gray-700 hover:text-blue-600 font-medium transition"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </nav>
  );
};
