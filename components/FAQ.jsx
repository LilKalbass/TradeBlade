'use client'

import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { useState } from "react";

const qs = [
    {
        q: "Что такое TradeBlade",
        a: "Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance. \n" +
            "\n" +
            "Он представляет пользователям множество преимуществ, таких как более высокая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.",
        id: 1
    },
    {
        q: "Что TradeBlade предлагает инвесторам",
        a: "Без понятия",
        id: 2
    },
    {
        q: "Должен ли я перевести свои средства на TradeBlade",
        a: "Сомневаюсь",
        id: 3
    }
]

export const Faq = () => {
    const [isOpen, setIsOpen] = useState({});

    const toggleFaq = (id) => {
        setIsOpen((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <div className='bg-white py-[96px] flex items-center justify-center'>
            <div className='container mx-auto'>
                <h4 className='font-bold text-[44px] leading-[56px] text-black pb-[64px] uppercase '>
                    часто задаваемые вопросы
                </h4>
                <div className='flex flex-col gap-y-3'>
                    {qs.map((data) => (
                        <div
                            key={data.id}
                            className={`cursor-pointer ${isOpen[data.id] ? 'bg-[#6A54FF]' : 'bg-[#EAEFF0]'} rounded-md px-4 transition-all duration-300`}
                            onClick={() => toggleFaq(data.id)}
                        >
                            <div className='flex items-center justify-between py-[28px]'>
                                <h6 className={`text-[18px] leading-[24px] ${isOpen[data.id] ? 'text-white' : ''}`}>{data.q}</h6>
                                <div className='transition-all duration-500 text-2xl'>
                                {isOpen[data.id] ? <FaChevronDown /> : <FaChevronUp />}
                                </div>
                            </div>
                            <p className={`${isOpen[data.id] ? 'text-[16px] leading-[22px] text-white mb-[24px]' : 'hidden'}`}>
                                {data.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
