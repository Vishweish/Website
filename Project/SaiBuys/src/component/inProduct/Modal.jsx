import React from 'react';

const Modal = ({ isOpen, onClose, media }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-full max-w-3xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 z-50"
                    style={{ zIndex: 1000 }}
                >
                    &times;
                </button>

                {/* Display media */}
                {media.includes('mp4') ? (
                    <video controls autoPlay className="w-full h-auto max-h-screen rounded-lg">
                        <source src={media} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={media} alt="Full Media" className="w-full h-auto max-h-screen object-cover rounded-lg" />
                )}
            </div>
        </div>
    );
};

export default Modal;


