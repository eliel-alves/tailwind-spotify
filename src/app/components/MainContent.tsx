import Image from 'next/image'
import { Bell, ChevronLeft, ChevronRight, CircleArrowDown } from 'lucide-react'
import { FaPause, FaPlay } from 'react-icons/fa6'

import avatarImg from './../../../public/img/profile-photo.jpg'
import playingGif from './../../../public/img/gif-playing.gif'

const defaultPath = '/img/recent-list'

interface RecentItem {
  name: string
  coverPath: string
  playing?: boolean
}

const recentItems: RecentItem[] = [
  {
    name: 'Music Of The Spheres',
    coverPath: `${defaultPath}/music-of-the-spheres.jpg`,
    playing: true,
  },
  {
    name: 'Sierra Burgess Is a Loser (Original Netflix Sound...',
    coverPath: `${defaultPath}/sierra-burgess.jpg`,
  },
  {
    name: 'This Is Fly By Midnight',
    coverPath: `${defaultPath}/fly-by-midnight.jpg`,
  },
  {
    name: 'Coldplay',
    coverPath: `${defaultPath}/coldplay.jpg`,
  },
  {
    name: 'Daily Mix 2',
    coverPath: `${defaultPath}/daily-mix-2.jpg`,
  },
  {
    name: 'Discover Weekly',
    coverPath: `${defaultPath}/discover-weekly.jpg`,
  },
  {
    name: '📻 flashBack',
    coverPath: `${defaultPath}/flashback.jpg`,
  },
  {
    name: 'This Is Michael Jackson',
    coverPath: `${defaultPath}/this-is-michael-jackson.jpg`,
  },
]

export const MainContent = () => {
  return (
    <main className="flex-1 rounded-lg bg-gray-spotify px-2">
      {/* main topbar */}
      <div>
        <div className="flex flex-col gap-6 p-4">
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
            <span className="flex h-8 cursor-pointer items-center rounded-full bg-zinc-800/80 px-3 transition-colors duration-300 hover:bg-zinc-700/60">
              Music
            </span>
            <span className="flex h-8 cursor-pointer items-center rounded-full bg-zinc-800/80 px-3 transition-colors duration-300 hover:bg-zinc-700/60">
              Podcasts
            </span>
          </div>
        </div>

        {/* recent items played */}
        <div className="grid grid-cols-4 grid-rows-2 gap-3 px-4 py-2">
          {recentItems.map((item, index) => {
            return (
              <div
                key={index}
                className="hover-trigger flex h-16 cursor-pointer items-center justify-between overflow-hidden rounded bg-white/5 backdrop-blur-md transition-colors duration-200 hover:bg-white/30"
              >
                {/* cover */}
                <Image
                  className="rounded-l"
                  src={item.coverPath}
                  alt=""
                  width={64}
                  height={64}
                  quality={100}
                />
                <p className="flex-1 text-ellipsis p-4 font-bold text-white">
                  {item.name}
                </p>

                {/* playing gif */}
                {item.playing && (
                  <div className="fixed right-0 mr-2 p-4">
                    <Image
                      src={playingGif}
                      width={16}
                      alt="Icon playing music"
                    />
                  </div>
                )}

                {/* play or pause button */}
                <button className="play-pause-icon z-10 mr-2 rounded-full bg-green-spotify p-3.5 shadow-xl hover:scale-105">
                  {item.playing ? (
                    <FaPause size={20} className="text-black" />
                  ) : (
                    <FaPlay size={20} className="pl-1 text-black" />
                  )}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
