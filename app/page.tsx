import React from 'react';
import Link from 'next/link';

const HomePage = () => {
    const featuredProducts = [
        { id: 1, name: 'Product 1', description: 'Description for Product 1' },
        { id: 2, name: 'Product 2', description: 'Description for Product 2' },
        { id: 3, name: 'Product 3', description: 'Description for Product 3' },
        { id: 4, name: 'Product 4', description: 'Description for Product 4' },
    ];

    return (
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="hero bg-blue-500 text-white text-center py-20">
                <h1 className="text-5xl font-bold">Welcome to Loopcart AI</h1>
                <p className="text-xl mt-4">Discover the future of shopping with AI-powered insights.</p>
                <div className="mt-10">
                    <Link href="/products" className="bg-white text-blue-500 px-4 py-2 rounded-lg font-semibold">
                        Shop Now
                    </Link>
                    <Link href="/ai-chat" className="ml-4 bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg font-semibold">
                        Chat with AI
                    </Link>
                </div>
            </div>

            {/* Featured Products Section */}
            <h2 className="text-3xl font-bold text-center mt-16">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                {featuredProducts.map(product => (
                    <div key={product.id} className="border border-gray-200 rounded-lg p-4 text-center">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;