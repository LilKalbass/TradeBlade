import Link from "next/link";
import Image from "next/image";
import {Nav} from "@/components/Nav";

export const Footer = () => {
    return (
        <footer className='pt-[30px] pb-[40px] border-b-3 border-[#6A54FF]'>
            <div className='container mx-auto'>
                <div
                    className='flex xl:flex-row ph:flex-col items-center justify-between ph:pb-0 xl:pb-[180px] xl:text-start ph:text-center'>
                    <h6 className='text-white/40 uppercase text-[14px] leading-[20px] xl:pb-0 ph:pb-3'>
                        Быстрая навигация
                    </h6>
                    <div className='ph:flex xl:hidden'>
                        <Nav/>
                    </div>
                    <div className=''>
                        <Link href='/'>
                            <Image src='/Logo.png' alt='logo' width={166} height={80}/>
                        </Link>
                    </div>
                    <div className='ph:flex xl:hidden'>
                        <p className='text-white/50 text-[14px] leading-[20px]'>
                            &copy; 2022 TradeBlade. All rights reserved.
                        </p>
                    </div>
                </div>
                <div className='xl:flex hidden items-center justify-between'>
                    <Nav/>
                    <p className='text-white/50 text-[14px] leading-[20px]'>
                        &copy; 2022 TradeBlade. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}