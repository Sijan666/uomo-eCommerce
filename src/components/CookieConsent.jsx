import React, { useState } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(() => {
        const cookieAccepted = localStorage.getItem('cookieAccepted');
        return !cookieAccepted; 
    });

    const handleAccept = () => {
        localStorage.setItem('cookieAccepted', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 w-[320px] bg-[#1a1a1a] p-6 shadow-2xl transition-all duration-500">
        <p className="mb-5 text-[13px] leading-relaxed text-gray-300">
            In order to provide you a personalized shopping experience, our site uses cookies. 
            By continuing to use this site, you are agreeing to our cookie policy.
        </p>
        <button
            onClick={handleAccept}
            className="w-full bg-[#555555] py-2.5 text-xs font-bold tracking-widest text-white transition-colors hover:bg-gray-400"
        >
            ACCEPT
        </button>
        </div>
    );
};

export default CookieConsent;