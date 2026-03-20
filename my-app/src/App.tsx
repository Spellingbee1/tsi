import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="container mx-auto px-4 py-12">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Добро пожаловать!
                        </h2>
                        <p className="text-gray-600 text-lg mb-4">
                            Это простая страница
                        </p>
                        <p className="text-gray-600">
                            буль буль
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;