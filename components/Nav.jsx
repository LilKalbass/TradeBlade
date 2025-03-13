import Link from "next/link";

export const Nav = () => {
    const links = [
        { href: '/', text: 'Цифры' },
        { href: '/', text: 'Сделки Онлайн' },
        { href: '/', text: 'О Компании' },
        { href: '/', text: 'Как Начать' },
        { href: '/', text: 'Тарифы' },
        { href: '/', text: 'Отзывы' },
        { href: '/', text: 'FAQ' }
    ];

    return (
        <nav>
            <div className='text-white/75 uppercase transition-all flex xl:flex-row ph:flex-col'>
                {links.map(({ href, text }) => (
                    <Link key={text} href={href} className='hover:text-white duration-300 xl:px-8 ph:px-0 ph:py-4 xl:py-0 text-[14px] font-medium leading-[18px]'>
                        {text}
                    </Link>
                ))}
            </div>
        </nav>
    );
};
