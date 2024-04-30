import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className='bg-headTextColor rounded-3xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              {/* Next.js Link kullanarak rota tanımlaması */}
              <Link href="/">
            Ana Menü
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-4 flex items-center space-x-4'>
              {/* Link içindeki a tag'i stillerle güncellendi */}
              <Link href="/">
Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;