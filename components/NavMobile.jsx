'use client'
import React, { useState } from "react";
import {AnimatePresence, motion} from "framer-motion";

import { RiMenu2Line, } from "react-icons/ri";
import { IoCloseOutline,} from "react-icons/io5";
import Link from "next/link";

const heightAnimation = {
    initial: { height: 0 },
    open: {
        height: '85vh',
        transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }
    },
    close: {
        height: 0,
        transition: { duration: 1, ease: [0.75, 0, 0.23, 1] }
    }
};

const letterAnimation = {
    initial: { y: '100%', opacity: 0 },
    enter: (i) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: [0.60, 0, 0.20, 1], delay: i[0] }
    }),
    close: (i) => ({
        y: '100%',
        opacity: 0,
        transition: { duration: 1, ease: [0.60, 0, 0.20, 1], delay: i[1] }
    })
};

const getWordByLetter = (name) => {
    return name.split('').map((letter, index) => (
        <motion.span
            key={index}
            variants={letterAnimation}
            initial="initial"
            animate="enter"
            exit="close"
            custom={[index * 0.06, (name.length - index) * 0.01]}
        >
            {letter}
        </motion.span>
    ));
};

const links = [
    { href: '/', text: 'Цифры' },
    { href: '/', text: 'Сделки Онлайн' },
    { href: '/', text: 'О Компании' },
    { href: '/', text: 'Как Начать' },
    { href: '/', text: 'Тарифы' },
    { href: '/', text: 'Отзывы' },
    { href: '/', text: 'FAQ' }
];

const NavMobile = ({ containerStyles }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`${containerStyles}`}>
            <div className="cursor-pointer outline-none" onClick={() => setIsOpen(true)}>
                <RiMenu2Line className="text-3xl text-white transition-all duration-200 hover:scale-110" />
            </div>

            <aside className={`${isOpen ? 'right-0' : '-right-full'} bg-[#6A54FF] fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}>
                <div className="flex flex-col items-center justify-between h-full pb-20">

                    <div
                        className="hover:scale-110 rounded-2xl cursor-pointer text-4xl text-white absolute w-10 h-10 right-8 top-8 flex items-center justify-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoCloseOutline />
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.nav variants={heightAnimation} initial="initial" animate="open" exit="close" className="flex flex-col gap-y-8">
                                {links.map((link) => (
                                    <Link
                                        key={link.text}
                                        href={link.href}
                                        className="flex items-center text-white font-medium justify-center hover:scale-110"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="text-[24px]">
                                            {getWordByLetter(link.text)}
                                        </div>
                                    </Link>
                                ))}
                            </motion.nav>
                        )}
                    </AnimatePresence>

                    <div className="flex items-center gap-x-3">
                        <button className="cursor-pointer px-[24px] py-[12px] border border-2 border-cyan-300 rounded-md text-cyan-300 text-[14px] font-medium bg-cyan-900/50 uppercase hover:text-black hover:bg-cyan-300 transition-all duration-600">
                            Вход
                        </button>
                        <button className="cursor-pointer px-[24px] py-[12px] border border-2 border-cyan-300 rounded-md text-black text-[14px] font-medium bg-cyan-300 uppercase hover:text-cyan-300 hover:bg-cyan-900/50 transition-all duration-600">
                            Регистрация
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default NavMobile;