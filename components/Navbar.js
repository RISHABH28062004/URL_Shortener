import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
            <div className="logo font-bold text-2xl cursor-pointer">
                <Link className='cursor-pointer' href="/">ByteLinks</Link>
            </div>
            <ul className='flex justify-center items-center gap-4'>
                <Link className='hover:text-purple-400' href="/"><li>Home</li></Link>
                <Link className='hover:text-purple-400' href="/about"><li>About</li></Link>
                <Link className='hover:text-purple-400' href="/shorten"><li>Shorten</li></Link>
                <Link className='hover:text-purple-400' href="/contact"><li>Contact Us</li></Link>
                <li className='flex gap-3'>
                    <Link href="/shorten">
                        <button className='bg-purple-500 shadow-lg p-3 rounded-xl py-1 font-bold hover:bg-purple-400 cursor-pointer'>Try Now</button>
                    </Link>

                    <Link href="/github">
                        <button className='bg-purple-500 shadow-lg p-3 rounded-xl py-1 font-bold hover:bg-purple-400 cursor-pointer'>GitHub</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
