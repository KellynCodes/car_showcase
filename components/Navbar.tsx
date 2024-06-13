import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export const Navbar = () => {
  return (
   <header className="w-full absolute z-10">
    <div className="max-w-[1440px] mx-auto flex items-center sm:px-16 px-6 py-4 justify-between">
        <Link href={'/'} className='flex justify-center items-center'>
        <Image src={'/logo.svg'} alt='car hub logo' height={18} width={118} />
        </Link>

        <Button title="Sign In" btnType="button" containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' />
    </div>
   </header>
  )
}
