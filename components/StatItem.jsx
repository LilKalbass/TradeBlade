'use client'

import CountUp from "react-countup";

export const StatItem = ({ title, end, duration=2, suffix = "" }) => {
    return (
        <div className="flex flex-col gap-y-2 items-center">
            <h6 className="uppercase text-[14px] leading-[20px] text-black">{title}</h6>
            <span className="text-[#6A54FF] font-medium xl:text-[60px] ph:text-[36px]  leading-[110px]">
                <CountUp start={0} end={end} duration={duration} separator=" " suffix={suffix} />
            </span>
        </div>
    );
}