import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currentPage = queryParams.get('page') || 1;

    const handleClick = () => {
        navigate(`/product/${product.id}?page=${currentPage}`);
    };
    // data-aos="flip-up"
    return (
        <div onClick={handleClick} className="cursor-pointer bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
            <div className="w-full h-48 overflow-hidden rounded-t-lg">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 hover:bg-slate-500 rounded-md">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;

