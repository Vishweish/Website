import React, { useState, useRef, useEffect } from 'react';
import Products from "../api/DummyData";
import ProductCard from "../productCard/ProductCard";
import { useLocation, useNavigate } from 'react-router-dom';

const Body = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const productsRef = useRef(null);

    const queryParams = new URLSearchParams(location.search);
    const initialPage = parseInt(queryParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(initialPage);
    const productsPerPage = 6;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = Products.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(Products.length / productsPerPage);

    useEffect(() => {
        // Update current page when the location changes
        setCurrentPage(initialPage);
    }, [location.search, initialPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            const nextPage = currentPage + 1;
            setCurrentPage(nextPage);
            navigate(`/products?page=${nextPage}`);
            productsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            navigate(`/products?page=${prevPage}`);
            productsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container mx-auto mt-8">
            {/* Products Section */}
            <h1 id="products" className="text-4xl font-bold mb-6 mt-20 m-5" ref={productsRef}>Our Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-5">
                {currentProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 mb-8">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 hover:bg-blue-600 transition disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Body;
