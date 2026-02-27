import React from 'react';
import { Button } from '../components/Button';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Верхняя декоративная полоса */}
                <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                <div className="p-8 sm:p-10">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                        О нас
                    </h2>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Мы
                    </p>

                    <div className="flex justify-center sm:justify-start">
                        <Button
                            color="primary"
                            size="large"
                            title="Узнать о нас"
                            onClick={() => alert('Спасибо за интерес!')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;