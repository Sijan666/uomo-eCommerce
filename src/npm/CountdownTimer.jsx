import React from 'react';
import Countdown from 'react-countdown';


const targetDate = new Date('2026-03-20T23:59:59').getTime();

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return null;
    }

    const formatTime = (time) => String(time).padStart(2, '0');

    return (
        <div className="flex items-center gap-x-2 md:gap-[25px]">
            {/* Days */}
            <div className="flex flex-col items-center">
                <span className="text-[30px] font-Jost text-[#000000]">{formatTime(days)}</span>
                <span className="font-Jost text-base font-bold text-[#767676] uppercase">Days</span>
            </div>

            {/* Separator */}
            <span className="text-[30px] font-Jost text-[#222222] pb-6">:</span>

            {/* Hours */}
            <div className="flex flex-col items-center">
                <span className="text-[30px] font-Jost text-[#000000]">{formatTime(hours)}</span>
                <span className="font-Jost text-base font-bold text-[#767676] uppercase">Hours</span>
            </div>

            {/* Separator */}
            <span className="text-[30px] font-Jost text-[#222222] pb-6">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
                <span className="text-[30px] font-Jost text-[#000000]">{formatTime(minutes)}</span>
                <span className="font-Jost text-base font-bold text-[#767676] uppercase">Mins</span>
            </div>

            {/* Separator */}
            <span className="text-[30px] font-Jost text-[#222222] pb-6">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
                <span className="text-[30px] font-Jost text-[#000000]">{formatTime(seconds)}</span>
                <span className="font-Jost text-base font-bold text-[#767676] uppercase">Sec</span>
            </div>
        </div>
    );
    };

    const CountdownTimer = () => {
    return (
        <div className="flex justify-center md:justify-start">
            <Countdown date={targetDate} renderer={renderer} />
        </div>
    );
};

export default CountdownTimer;