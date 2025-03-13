"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar} from "swiper/modules";
import "swiper/css";
import 'swiper/css/scrollbar';
import {TradeCard} from "@/components/TradeCard";

const trades = [
    { pair: "NEAR/USDT", profit: 58.6206, target: 4, date: "06.10.2022" },
    { pair: "BTC/USDT", profit: 6.02, target: 3, date: "06.10.2022" },
    { pair: "ETH/USDT", profit: 16.3, target: 4, date: "06.10.2022" },
    { pair: "NEAR/USDT", profit: 0.963, target: 4, date: "06.10.2022" },
    { pair: "NEAR/USDT", profit: 58.62, target: 4, date: "06.10.2022" },
    { pair: "NEAR/USDT", profit: 58.6206, target: 4, date: "06.10.2022" },
    { pair: "BTC/USDT", profit: 6.02, target: 3, date: "06.10.2022" },
    { pair: "ETH/USDT", profit: 16.3, target: 4, date: "06.10.2022" },
    { pair: "NEAR/USDT", profit: 0.963, target: 4, date: "06.10.2022" },
    { pair: "NEAR/USDT", profit: 58.62, target: 4, date: "06.10.2022" }
];

export const Trades = () => {
    return (
        <div className='pt-[96px] pb-[118px]'>
            <div className='container mx-auto'>
                <h2 className="text-white text-[32px] font-bold uppercase mb-2">Прошедшие сделки</h2>
                <p className="text-green-400 text-sm">● Онлайн</p>

                <Swiper
                    modules={[Scrollbar]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    scrollbar
                    className="mt-6 overflow-visible"
                >
                    {trades.map((trade, index) => (
                        <SwiperSlide key={index} className="max-w-[250px]">
                            <TradeCard {...trade} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}