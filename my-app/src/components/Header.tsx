import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Логотип */}
                    <div className="flex items-center space-x-2">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                        </svg>
                        <h1 className="text-2xl font-bold">Мой Сайт</h1>
                    </div>

                    {/* Десктопное меню */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-8">
                            <li>
                                <a href="/" className="hover:text-blue-200 transition duration-300">
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-blue-200 transition duration-300">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-blue-200 transition duration-300">
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-200 transition duration-300">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Мобильное меню кнопка */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Мобильное меню */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <ul className="space-y-3">
                            <li>
                                <a href="/" className="block hover:text-blue-200 transition duration-300">
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="block hover:text-blue-200 transition duration-300">
                                    О нас
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="block hover:text-blue-200 transition duration-300">
                                    Услуги
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="block hover:text-blue-200 transition duration-300">
                                    Контакты
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;