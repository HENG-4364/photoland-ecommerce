import Cart from '@/components/Cart/Cart'
import CategoryNavMobile from '@/components/CategoryNavMobile/CategoryNavMobile'
import SearchForm from '@/components/SearchForm/SearchForm'
import { CartContext } from '@/context/CartContext/CartContext'
import Link from 'next/link'
import React, { useContext, useState } from 'react'

const AppNavbar = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  const [isShowBtnSearch, setIsShowBtnSearch] = useState(false);
  return (
    <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px] '>
      <div className='container mx-auto'>
        <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
          {/* Menu */}
          <div className='xl:hidden'>
            <i onClick={() => setCatNavMobile(true)} className="fa-solid fa-bars text-3xl  cursor-pointer"></i>
          </div>
          {/* category  nav mobile*/}
          <div className={`${catNavMobile ? "left-0" : "-left-full"} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* logo */}

          <Link href={'/'}>
            <img src="/logo.png" alt="" />
          </Link>
          {/* searchform - show only on desktop */}
          <div className='hidden w-full xl:flex xl:max-w-[734px] '>
            <SearchForm />
          </div>

          {/* phone & cart*/}
          <div className='flex items-center gap-x-[10px]'>
            {/* phone */}
            <div className='hidden xl:flex uppercase'>Need help? 123 456 789</div>
            {/* btn search moblie only */}
            <div onClick={() => setIsShowBtnSearch(!isShowBtnSearch)} className='flex items-center xl:hidden cursor-pointer mr-[18px]'>
              <i className="fa-solid fa-magnifying-glass text-xl"></i>
            </div>
            {/* cart */}
            <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer'>
              {/* cart icon */}
              <i className="fa-solid fa-bag-shopping text-2xl"></i>
              {/* amount */}
              <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>{itemsAmount}</div>
            </div>
            {/* cart */}
            <div className={`
            ${isOpen ? 'right-0' : '-right-full'}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] translate-all duration-300`}>
              <Cart />
            </div>
          </div>

          {/* searchform show on mobile only */}

        </div>
        <div className={`${isShowBtnSearch ? "" : "hidden"} xl:hidden transition-all duration-300 delay-5000`}>
          <SearchForm />
        </div>
      </div>
    </header>
  )
}

export default AppNavbar
