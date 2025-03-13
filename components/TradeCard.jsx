"use client";


import CountUp from "react-countup";

export const TradeCard = ({ pair, profit, target, date }) => {
    return (
        <div className="bg-[#5B32FF] text-white rounded-lg p-4 relative ">
            <div className="absolute top-0 right-0 w-12 h-12 bg-[#4025B5] clip-path-triangle" />
            <h3 className="text-lg font-bold">{pair}</h3>
            <p className="text-xs opacity-70">SPOT · 1 мин. назад</p>

            <p className="text-sm mt-2">Прибыль</p>
            <span className="text-green-300 text-2xl font-semibold">
                <CountUp start={0} end={profit} decimals={profit % 1 === 0 ? 0 : 4} suffix="%" />
                ↑
            </span>

            <p className="text-xs mt-2">Цель {target}</p>
            <p className="text-xs opacity-70">Дата входа {date}</p>
        </div>
    );
};