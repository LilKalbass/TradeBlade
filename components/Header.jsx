'use client'

import {useState, useEffect} from 'react'
import Image from "next/image";
import {Nav} from "@/components/Nav";
import Link from "next/link";
import NavMobile from "@/components/NavMobile";

export const Header = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 120)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    return (
        <header className = {`${active ? 'shadow-2xl' : 'py-0'}
                            fixed left-0 right-0 top-0 py-4 z-20 bg-[#030718] transition-all duration-400`}>
            <div className='container mx-auto flex items-center justify-between'>
                <div>
                    <Link href='/'>
                        <Image src='/Logo.png' alt='logo' width={130} height={64}/>
                    </Link>
                </div>
                <div className='hidden xl:flex  items-center gap-x-16'>
                    <Nav/>
                    <div className='flex items-center gap-x-3'>
                        <button className='cursor-pointer px-[24px] py-[12px] border border-2 border-cyan-300 rounded-md text-cyan-300 text-[14px] font-medium bg-cyan-900/50 uppercase hover:text-black hover:bg-cyan-300 transition-all duration-600'>
                            Вход
                        </button>
                        <button className='cursor-pointer px-[24px] py-[12px] border border-2 border-cyan-300 rounded-md text-black text-[14px] font-medium bg-cyan-300 uppercase hover:text-cyan-300 hover:bg-cyan-900/50 transition-all duration-600'>
                            Регистрация
                        </button>
                    </div>
                </div>
                <div className='xl:hidden flex'>
                    <NavMobile/>
                </div>
            </div>
        </header>
    )
}