import Image from "next/image";

export const Hero = () => {
    return (
        <div
            className="relative xl:pt-[200px] ph:pt-[120px] pb-[194px] overflow-hidden"
        >
            <div className="container mx-auto">
                <div className="flex justify-between xl:flex-row ph:flex-col ">
                    <div className="flex xl:flex-col ph:flex-row items-center">
                        <div className='flex flex-col order-2 ph:order-1'>
                            <h1 className="uppercase xl:text-[60px] xl:leading-[72px] xl:max-w-[630px] ph:max-w-[344px] ph:text-[36px] ph:leading-[44px] text-white font-bold pb-3">
                                моментально Копируй сделки профи трейдеров
                            </h1>
                            <p className="text-[#E7F7F8]/75 max-w-[564px] text-[16px] leading-[20px] pb-[24px]">
                                Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом
                                режиме.
                            </p>
                            <form
                                className="bg-[#201A4F] max-w-[500px] w-full flex justify-between mb-3 rounded-md overflow-hidden">
                                <input
                                    className="text-[#E7F7F8]/75 uppercase py-[20px] px-[16px] w-full bg-transparent focus:outline-none"
                                    placeholder="Ваш e–mail"
                                    type="email"
                                    name="_email"
                                    pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                                    required
                                />
                                <button
                                    className="px-[24px] py-[12px] bg-cyan-300 text-black text-[14px] font-medium uppercase hover:text-cyan-300 hover:bg-cyan-900/50 transition-all duration-300"
                                >
                                    начать
                                </button>
                            </form>
                            <p className="text-[#E7F7F8]/50 text-[14px] leading-[20px]">
                                5 дней бесплатного пользования
                            </p>
                        </div>
                    </div>
                    <div className=' order-1 ph:order-2 ph:mt-4 md:mt-0'>
                        <Image src="/HeroSide.png" alt="hero_img" width={470} height={210}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
