import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Products from "../api/DummyData"; // Import your products data
import Modal from './modal'; // Import the Modal component

const ProductDetail = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const product = Products.find((product) => product.id.toString() === id);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const queryParams = new URLSearchParams(location.search);
    const currentPage = queryParams.get('page') || 1;

    if (!product) {
        return <div>Product not found</div>;
    }

    const media = [...product.images, ...product.videos]; // Combine images and videos into a single array

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBack = () => {
        navigate(`/products/?page=${currentPage}`);
    };

    return (
        <div className="container mx-auto mt-8 p-5">
            
            <div className="flex flex-col md:flex-row items-center">
                {/* Carousel Section */}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Product Media</h2>
                    <div className="relative w-full md:w-[600px] h-[400px]">
                        {/* Display current image or video */}
                        {media[currentIndex].includes('mp4') ? (
                            <video
                                controls
                                className="w-full h-full object-cover rounded-lg cursor-pointer"
                                onClick={openModal} // Open modal on click
                            >
                                <source src={media[currentIndex]} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img
                                src={media[currentIndex]}
                                alt={`Product Media ${currentIndex + 1}`}
                                className="w-full h-full object-cover rounded-lg cursor-pointer"
                                onClick={openModal} // Open modal on click
                            />
                        )}

                        {/* Navigation buttons */}
                        <button onClick={handlePrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
                            &#8249;
                        </button>
                        <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
                            &#8250;
                        </button>
                    </div>
                </div>

                <div className="md:ml-8 mt-4 md:mt-0">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-2xl text-gray-700 mb-4">{product.price}</p>
                    <p className="text-lg">{product.description}</p>
                </div>
            </div>

            {/* Modal for full-size media */}
            <Modal isOpen={isModalOpen} onClose={closeModal} media={media[currentIndex]} />

            <button onClick={handleBack} className="bg-blue-500 text-white px-4 py-2 rounded-md mb-8">
                Back to Products
            </button>
        </div>
    );
};

export default ProductDetail;





