import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <>
            {/* Тестовый элемент - временно */}
            <div className="bg-purple-500 text-white p-8 text-center text-2xl font-bold">
                ЕСЛИ ЭТОТ БЛОК ФИОЛЕТОВЫЙ - TAILWIND РАБОТАЕТ!
            </div>

            <header className="bg-gray-100 p-4 flex justify-between items-center border-b border-gray-300">
                <h1 className="text-xl font-bold">Сайт</h1>
                <nav>
                    <ul className="flex gap-4 list-none m-0 p-0">
                        <li>
                            <Link to="/" className="text-gray-800 hover:text-blue-600 transition">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-gray-800 hover:text-blue-600 transition">
                                О нас
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;