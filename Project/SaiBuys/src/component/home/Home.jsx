import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Home = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleViewProductsClick = () => {
        navigate('/products');
    };

    const onSubmit = data => {
        console.log(data);
        // You can send the form data to a server or API here
        alert('Form submitted successfully!');
    };

    return (
        <div>
            {/* Hero Section */}
            <section id='home'
                className="relative bg-cover bg-center h-screen pt-20 md:pt-16"
                style={{ backgroundImage: 'url(https://ik.imagekit.io/vishweish05/SaiBuys/custom-tailoring-service-indirapuram-tailor.jpg?updatedAt=1725182854436)' }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Unlock Exclusive Deals on Premium Products</h1>
                        <p className="text-lg md:text-xl mb-8">
                            Join our reseller network and access top brands at unbeatable prices. Your gateway to high-quality products and exceptional customer support starts here.
                        </p>
                        <a href="#products" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition ">
                            Shop Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <div id='products' className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 p-5 ">
                <div className="bg-white shadow-md rounded-lg p-4 text-center">
                    <img src="https://cdn.b12.io/client_media/OfVIBjK3/95c28b30-5ae1-11ef-8249-0242ac110002-jpg-regular_image.jpeg" alt="Gadgets" />
                    <h2 className="text-2xl font-bold mb-4">Gadgets</h2>
                    <p>Explore our range of premium gadgets, perfect for every tech enthusiast.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 text-center">
                    <img src="https://cdn.b12.io/client_media/OfVIBjK3/95a664f0-5ae1-11ef-8249-0242ac110002-jpg-regular_image.jpeg" alt="Pooja Products" />
                    <h2 className="text-2xl font-bold mb-4">Pooja Products</h2>
                    <p>Discover high-quality pooja products for all your spiritual needs.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4 text-center">
                    <img src="https://cdn.b12.io/client_media/OfVIBjK3/951daad4-5ae1-11ef-8249-0242ac110002-jpg-regular_image.jpeg" alt="Home essentials" />
                    <h2 className="text-2xl font-bold mb-4">Home Essentials</h2>
                    <p>Find essential items to enhance your home, from decor to daily utilities.</p>
                </div>
            </div>

            {/* View Products Button */}
            <div className="flex justify-center mt-2">
                <button
                    onClick={handleViewProductsClick}
                    className="text-white px-6 py-3 rounded-md transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                >
                    View Our Products
                </button>
            </div>

            {/* About Us Section */}
            <div id="about" className="relative flex flex-col md:flex-row items-center justify-center h-full p-4 ">
                <div className="text-center md:text-left px-4 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 mt-20 text-green-500">Discover SaiBuys</h1>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Your source for premium gadgets</h1>
                    <p className="text-lg md:text-xl mb-8">
                        SaiBuys specializes in providing top-notch small gadgets, pooja products, and home essentials. Based in Karur, we pride ourselves on offering premium products at exclusive deals. Our fast shipping and dedicated support make it easy for resellers to source high-quality items. Join us in transforming your business with the best products available.
                    </p>
                </div>
                <div className="mt-8 md:mt-0 md:ml-8 md:w-1/2">
                    <img
                        src="https://cdn.b12.io/client_media/OfVIBjK3/916481d8-5ae1-11ef-93aa-0242ac110002-jpg-hero_image.jpeg"
                        alt="SaiBuys Gadgets"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Contact Us Section */}
            <div className="relative flex flex-col md:flex-row items-center justify-center h-full p-4 space-y-8 md:space-y-0 md:space-x-8">
                <div className="text-center md:text-left px-4 md:w-1/2 ">
                    <h1 id="contact" className="text-4xl font-bold mb-6 mt-20 text-green-500">Contact Us</h1>
                    <p className="text-lg md:text-xl mb-8">
                        Contact us or fill the form and let us know your experience about our website your feedback is more important for
                    </p>
                    {/* Form Section */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                type="text"
                                {...register('name', { required: 'Name is required' })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                type="email"
                                {...register('email', { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Invalid email address' } })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                {...register('message', { required: 'Message is required' })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm resize-y overflow-y-auto"
                                rows="4"
                                style={{ minHeight: '100px', maxHeight: '300px' }}
                            ></textarea>

                            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                        </div>

                        <div className="flex items-center">
                            <input
                                id="consent"
                                type="checkbox"
                                {...register('consent', { required: true })}
                                className="mr-2"
                            />
                            <label htmlFor="consent" className="text-sm">
                                I allow this website to store my submission so they can respond to my inquiry.
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Address Section */}
                <div className="md:w-1/2 w-full text-center mx-auto mt-8 md:mt-0 md:ml-8 bg-gray-300 p-5">
                    <p className="text-xl mb-8 font-bold">ADDRESS</p>
                    <p>No 30, 20 Feet Road, Gandhi Nagar, Karur, Tamil Nadu</p>
                    <p>
                        <a href="mailto:vishweishv03@gmail.com" className="text-blue-500 underline">
                            vishweishv03@gmail.com
                        </a>
                    </p>
                    <p>
                        <a href="https://wa.me/918825452654" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            +91 8825452654
                        </a>
                    </p>
                    <p className="text-xl mb-8 font-bold">HOURS</p>
                    <p>Monday 9:00am – 10:00pm</p>
                    <p>Tuesday 9:00am – 10:00pm</p>
                    <p>Wednesday 9:00am – 10:00pm</p>
                    <p>Thursday 9:00am – 10:00pm</p>
                    <p>Friday 9:00am – 10:00pm</p>
                    <p>Saturday 9:00am – 6:00pm</p>
                    <p>Sunday 9:00am – 12:00pm</p>
                    <p className="mt-4">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Karur+Tamil+Nadu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            View Location on Google Maps
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
