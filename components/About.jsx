export const About = () => {
    return (
        <div className='xl:pt-[136px] ph:pt-[180px] xl:pb-[96px] ph:pb-4 bg-white'
             style={{ clipPath: "polygon(0% 0%, 60% 0%, 65% 25%, 100% 25%, 100% 100%, 0% 100%)" }}
        >
            <div className='container mx-auto flex xl:flex-row ph:flex-col items-center justify-between'>
                <div className='flex flex-col xl:gap-y-[40px] ph:gap-y-[20px] max-w-[414px]'>
                    <h2 className='font-bold xl:text-[44px] xl:leading-[56px] ph:text-[28px] ph:leading-[36px] text-black uppercase'>
                        О компании
                    </h2>
                    <p className='text-[16px] text-[#030718] leading-[20px] ph:pb-10 xl:pb-0'>
                        Мы опытная команда, для которой трейдинг – профессия. TradeBlade является авторизованным официальным брокером биржи Binance.
                        <br/> <br/>
                        Он представляет пользователям множество преимуществ, таких как более високая скорость синхронизации API и возможность создать учетную запись Binance через платформу TradeBlade всего в 1 клик.
                    </p>
                </div>
                <div className='flex flex-col max-w-[630px] items-center gap-y-8 text-center rounded-md pt-[32px] pb-[40px] justify-center bg-[#6A54FF]'>
                    <h4 className='text-white text-[28px] font-medium leading-[36px]'>
                        Попробуйте сейчас и получите
                        5 дней бесплатного пользования
                    </h4>
                    <form
                        className="bg-[#201A4F] xl:max-w-[500px] ph:max-w-[324px] w-full flex xl:flex-row ph:flex-col justify-between rounded-md overflow-hidden">
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
                            попробовать
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}