'use client'

import { useState } from 'react'
import { FaCheck } from "react-icons/fa6";

export const Tariffs = () => {
    const [spot, setSpot] = useState(true);
    const [activeIndex, setActiveIndex] = useState(1);

    const [selectedPeriods, setSelectedPeriods] = useState({
        'Standard Spot': "12 месяцев",
        'Vip Spot': "12 месяцев",
        'Standard Ф': "12 месяцев",
        'Vip Ф': "12 месяцев"
    });

    const handlePeriodChange = (title, event) => {
        setSelectedPeriods(prev => ({
            ...prev,
            [title]: event.target.value
        }));
    };

    const ToggleButtons = ({ spot, setSpot }) => (
        <div onClick={() => setSpot(!spot)}
             className='cursor-pointer mb-[44px] flex items-center justify-between bg-[#6A54FF] xl:max-w-[414px] ph:max-w-[344px] w-full'>
            <button className={`${spot ? 'bg-[#57E1FF] text-black' : 'text-[#57E1FF]'} uppercase transition-all duration-400 w-[50%] py-2 xl:text-[24px] xl:leading-[28px] ph:text-[18px] ph:leading-[24px] font-medium`}>
                спот
            </button>
            <button className={`${spot ? 'text-[#57E1FF]' : 'bg-[#57E1FF] text-black'} transition-all uppercase duration-400 w-[50%] py-2 xl:text-[24px] xl:leading-[28px] ph:text-[18px] ph:leading-[24px] font-medium`}>
                фьючерс
            </button>
        </div>
    );

    const TariffDetail = ({ title, features, price, onClick, isActive, selectedPeriod, handlePeriodChange }) => {
        const calculatePrice = (price) => {
            let multiplier = 1;

            if (selectedPeriod === "12 месяцев") {
                multiplier = 2;
            } else if (selectedPeriod === "6 месяцев") {
                multiplier = 1.5;
            } else {
                multiplier = 1
            }

            const basePriceNum = parseFloat(price.replace('$', ''));
            const adjustedPrice = basePriceNum * multiplier;
            return `$${adjustedPrice.toFixed(2)}`;
        };

        return (
            <div
                onClick={onClick}
                className={`flex flex-col p-6 border rounded-lg border-[#6A54FF] max-w-[414px] min-h-[600px] transition-all duration-400 cursor-pointer ${isActive ? 'bg-[#6A54FF]' : 'bg-transparent'}`}
            >
                <h5 className='uppercase text-white text-[32px] leading-[48px] font-medium pb-[56px]'>{title}</h5>
                <div className='flex flex-col justify-between gap-y-[30px] flex-grow'>
                    <div className='flex flex-col'>
                        {features.map((feature, index) => (
                            <div key={index}
                                 className='flex py-2 items-baseline gap-x-[10px] text-[16px] border-b border-[#ffffff]/25 border-dotted'>
                                <FaCheck />
                                <p>{feature}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <div className='flex items-center justify-between'>
                            <span className='text-[36px]'>{calculatePrice(price)}</span>
                            <select
                                value={selectedPeriod}
                                onChange={(e) => handlePeriodChange(title, e)}
                                className=" border p-2 text-cyan-300  rounded-md"
                            >
                                <option value="12 месяцев">12 месяцев</option>
                                <option value="6 месяцев">6 месяцев</option>
                                <option value="3 месяцев">3 месяцев</option>
                            </select>
                        </div>
                        <button
                            className='cursor-pointer w-full bg-[#57E1FF] py-2 rounded-md hover:bg-[#57E1FF]/75 transition-all duration-400'>
                            <div className='flex flex-col text-black'>
                                <p className='text-[16px] font-medium leading-[20px]'>Попробовать</p>
                                <span className='text-[12px] text-black/75 leading-[16px]'>5 дней бесплатно</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const tariffs = [
        {
            title: 'Standard Spot',
            features: [
                "Ручной трейдинг",
                "Автоматическое или полуавтоматическое копирование сделок",
                "Личный кабинет со статистикой",
                "Среднесрочные сделки с уровнями набора портфеля"
            ],
            price: "$234",
            type: 'spot'
        },
        {
            title: 'Vip Spot',
            features: [
                "Ручной трейдинг",
                "Автоматическое или полуавтоматическое копирование сделок",
                "Личный кабинет со статистикой",
                "Краткосрочные, среднесрочные и инвест сделки",
                "Доступ в Vip чат с командой",
                "Наш авторский курс по трейдингу"
            ],
            price: "$585",
            type: 'spot'
        },
        {
            title: 'Standard Ф',
            features: [
                "Ручной трейдинг",
                "Автоматическое или полуавтоматическое копирование сделок",
                "Личный кабинет со статистикой",
                "Среднесрочные сделки с уровнями набора портфеля"
            ],
            price: "$234",
            type: 'futures'
        },
        {
            title: 'Vip Ф',
            features: [
                "Ручной трейдинг",
                "Автоматическое или полуавтоматическое копирование сделок",
                "Личный кабинет со статистикой",
                "Краткосрочные, среднесрочные и инвест сделки",
                "Доступ в Vip чат с командой",
                "Наш авторский курс по трейдингу"
            ],
            price: "$585",
            type: 'futures'
        }
    ];

    const filteredTariffs = tariffs.filter(tariff => (spot ? tariff.type === 'spot' : tariff.type === 'futures'));

    return (
        <div className='xl:py-[96px] ph:py-10 text-white'>
            <div className='container mx-auto xl:px-[224px] ph:px-0 flex flex-col items-center'>
                <h4 className='uppercase xl:text-[44px] xl:leading-[56px] ph:text-[28px] ph:leading-[36px] font-bold xl:mb-10 ph:mb-6'>
                    тарифы
                </h4>
                <ToggleButtons spot={spot} setSpot={setSpot} />

                <div className='flex xl:flex-row ph:flex-col items-stretch xl:gap-x-[20px] ph:gap-y-5'>
                    {filteredTariffs.map((tariff, index) => (
                        <TariffDetail
                            key={index}
                            title={tariff.title}
                            features={tariff.features}
                            price={tariff.price}
                            isActive={index === activeIndex}
                            onClick={() => setActiveIndex(index)}
                            selectedPeriod={selectedPeriods[tariff.title]}
                            handlePeriodChange={handlePeriodChange}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
