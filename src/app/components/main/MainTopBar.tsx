'use client'

import Image from 'next/image'
import { Bell, ChevronLeft, ChevronRight, CircleArrowDown } from 'lucide-react'

import avatarImg from './../../../../public/img/profile-photo.jpg'
// import { useEffect, useState } from 'react'

export const MainTopBar = () => {
  // const [bgColor, setBgColor] = useState('bg-transparent')

  // const handleScroll = (element: Element) => {
  //   console.log(element.scrollHeight)

  //   if (window.scrollY > 120) {
  //     setBgColor('bg-blue-coldplay') // Altere para a cor desejada
  //   } else {
  //     setBgColor('bg-transparent')
  //   }
  // }

  return (
    <div
      id="main-topbar"
      className={`fixed top-2 z-10 flex w-[1476px] flex-col gap-6 rounded-t-lg px-6 py-4 transition-colors duration-300`}
    >
      {/* topbar navigation */}
      <div className="flex items-center justify-between">
        {/* prev and next icons */}
        <div className="flex gap-2">
          <button className="cursor-not-allowed rounded-full bg-black/40 p-1">
            <ChevronLeft />
          </button>
          <button className="cursor-not-allowed rounded-full bg-black/40 p-1">
            <ChevronRight />
          </button>
        </div>

        {/* top bar right */}
        <div className="flex gap-2">
          <button className="flex h-8 cursor-pointer items-center gap-1 rounded-full bg-black/40 px-3 text-white hover:scale-105">
            <CircleArrowDown size={16} />
            <span className="text-sm font-bold">Install App</span>
          </button>
          <button className="cursor-pointer rounded-full bg-black/40 hover:scale-105 hover:text-white">
            <Bell size={32} className="p-2" />
          </button>
          <Image
            src={avatarImg}
            alt=""
            width={32}
            height={32}
            className="cursor-pointer rounded-full border-4 border-black/40 hover:scale-105"
          />
        </div>
      </div>

      {/* filters */}
      <div className="flex gap-2 text-sm text-white">
        <span className="flex h-8 cursor-pointer items-center rounded-full bg-white px-3 text-black">
          All
        </span>
        <span className="flex h-8 cursor-pointer items-center rounded-full bg-white/5 px-3 transition-colors duration-300 hover:bg-white/10">
          Music
        </span>
        <span className="flex h-8 cursor-pointer items-center rounded-full bg-white/5 px-3 transition-colors duration-300 hover:bg-white/10">
          Podcasts
        </span>
      </div>
    </div>
  )
}
