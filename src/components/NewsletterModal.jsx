import React, { useState, useEffect } from 'react';
import Image from './Image';
import modalImg from '../assets/modalImg.png'

const NewsletterModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsOpen(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40  transition-all duration-300 px-4">
            <div className="relative flex w-[900px] bg-white shadow-2xl flex-col md:flex-row h-auto md:h-[450px] gap-x-10">
                <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black z-10 transition-colors cursor-pointer"
                >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                {/* left side*/}
                <div className="hidden md:flex w-[450px] bg-[#e8e8e8] items-center justify-center relative overflow-hidden">
                    <Image imgSrc={modalImg} className={'w-full'}/>
                </div>
                {/* right side */}
                <div className="flex w-full md:w-[370px] flex-col justify-center bg-white p-4">
                    <h2 className="mb-4 md:text-[26px] text-[20px]  font-medium text-[#222222] font-Jost">Sign Up to Our Newsletter</h2>
                    <p className="mb-10 text-sm text-[#222222] font-Jost">
                        Be the first to get the latest news about trends, promotions, and much more!
                    </p>
                    <form 
                        onSubmit={(e) => {
                        e.preventDefault();
                        alert("Subscribed successfully!");
                        setIsOpen(false);
                        }} 
                        className="flex border border-gray-200 p-2"
                    >
                        <input
                        type="email"
                        required
                        placeholder="Your email address"
                        className="flex-1 bg-transparent px-3 text-sm focus:outline-none placeholder-gray-400"
                        />
                        <button
                        type="submit"
                        className="text-sm font-bold tracking-widest text-black px-4 hover:text-gray-600 transition"
                        >
                        JOIN
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterModal;