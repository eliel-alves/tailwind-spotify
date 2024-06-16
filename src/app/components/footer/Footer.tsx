import Image from 'next/image'

import coverImg from '../../../../public/img/footer/higher-power.jpg'
import {
  CirclePlus,
  ListVideo,
  Maximize2,
  MicVocal,
  MonitorSpeaker,
  Proportions,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  SquarePlay,
  Volume2,
} from 'lucide-react'
import { FaCirclePause } from 'react-icons/fa6'

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between rounded-lg p-2">
      {/* left icons and cover */}
      <div className="flex w-[30%] items-center gap-2">
        <Image
          src={coverImg}
          alt=""
          width={56}
          height={56}
          quality={100}
          className="cursor-pointer rounded border border-gray-spotify bg-cover transition-all duration-200 hover:brightness-125"
        />
        <div className="pl-2 text-sm">
          <p className="cursor-pointer text-white hover:underline">
            Higher Power
          </p>
          <span className="cursor-pointer text-xs hover:text-white hover:underline">
            Coldplay
          </span>
        </div>
        <CirclePlus
          size={32}
          className="cursor-pointer p-1.5 hover:text-white"
        />
      </div>

      {/* center icons and bar */}
      <div className="flex w-2/5 max-w-[722px] flex-col items-center gap-2">
        <div className="flex gap-3">
          <button className="focus:text-green-spotify">
            <Shuffle
              size={32}
              className="cursor-pointer p-1.5 hover:text-white"
            />
          </button>
          <SkipBack
            size={32}
            className="cursor-pointer p-1.5 hover:text-white"
          />
          <FaCirclePause size={32} className="cursor-pointer text-white" />
          <SkipForward
            size={32}
            className="cursor-pointer p-1.5 hover:text-white"
          />
          <Repeat size={32} className="cursor-pointer p-1.5 hover:text-white" />
        </div>
        <div className="flex w-full items-center gap-2 px-4">
          <span className="text-xs">2:49</span>
          <div className="h-1 w-full rounded-lg bg-zinc-700">
            <div className="h-1 w-[82%] rounded-lg bg-white"></div>
          </div>
          <span className="text-xs">3:26</span>
        </div>
      </div>

      {/* right icons */}
      <div className="flex w-[30%] items-center justify-end gap-3">
        <SquarePlay size={20} className="cursor-pointer hover:text-white" />
        <MicVocal size={20} className="cursor-pointer hover:text-white" />
        <ListVideo size={20} className="cursor-pointer hover:text-white" />
        <MonitorSpeaker size={20} className="cursor-pointer hover:text-white" />
        <div className="flex cursor-pointer items-center gap-2">
          <Volume2 size={20} className="cursor-pointer hover:text-white" />
          <div className="h-1 w-[93px] rounded-lg bg-white hover:bg-green-spotify"></div>
        </div>
        <Proportions size={20} className="cursor-pointer hover:text-white" />
        <Maximize2 size={20} className="cursor-pointer hover:text-white" />
      </div>
    </footer>
  )
}
