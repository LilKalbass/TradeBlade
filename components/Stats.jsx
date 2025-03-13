import {StatItem} from "@/components/StatItem";

export const Stats = () => {
    return (
        <div className='pt-[116px] pb-[60px] bg-white'
             style={{ clipPath: "polygon(0% 0%, 60% 0%, 65% 25%, 100% 25%, 100% 100%, 0% 100%)" }}
        >
            <div className='container mx-auto flex xl:flex-row ph:flex-col justify-between'>
                <div className='flex flex-col gap-y-1 ph:mb-4 xl:mb-0'>
                    <h3 className='uppercase font-bold text-[44px] leading-[56px]'>
                        цифры
                    </h3>
                    <p className='text-black/50 text-[14px] leading-[20px]'>
                        Cентябрь 2022
                    </p>
                </div>
                <div className='flex xl:flex-row ph:flex-col justify-between items-center gap-x-[140px] mr-[10%]'>
                    <StatItem title="Торговой прибыли" end={2756} suffix="%" duration={3} />
                    <StatItem title="Фьючерсных и спотовых сделок" end={67} />
                    <StatItem title="Прибыль подписчиков" end={375000} duration={4} />
                </div>
            </div>
        </div>
    )
}