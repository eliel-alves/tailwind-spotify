import Image from 'next/image'
import { FaPause, FaPlay } from 'react-icons/fa6'

import playingGif from './../../../../public/img/gif-playing.gif'

const defaultPath = '/img/recent-list/'

interface RecentItem {
  name: string
  coverPath: string
  playing?: boolean
}

const recentItems: RecentItem[] = [
  {
    name: 'Music Of The Spheres',
    coverPath: 'music-of-the-spheres.jpg',
    playing: true,
  },
  {
    name: 'Sierra Burgess Is a Loser (Original Netflix Sound...',
    coverPath: 'sierra-burgess.jpg',
  },
  {
    name: 'This Is Fly By Midnight',
    coverPath: 'fly-by-midnight.jpg',
  },
  {
    name: 'Coldplay',
    coverPath: 'coldplay.jpg',
  },
  {
    name: 'Daily Mix 2',
    coverPath: 'daily-mix-2.jpg',
  },
  {
    name: 'Discover Weekly',
    coverPath: 'discover-weekly.jpg',
  },
  {
    name: '📻 flashBack',
    coverPath: 'flashback.jpg',
  },
  {
    name: 'This Is Michael Jackson',
    coverPath: 'this-is-michael-jackson.jpg',
  },
]

export const RecentItemsPlayed = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-3 bg-gradient-to-b from-blue-coldplay to-gray-spotify px-6 pb-2 pt-32">
      {recentItems.map((item, index) => {
        return (
          <div
            key={index}
            className="hover-trigger flex h-16 cursor-pointer items-center justify-between overflow-hidden rounded bg-white/5 backdrop-blur-md transition-colors duration-200 hover:bg-white/20"
          >
            {/* cover */}
            <Image
              className="rounded-l"
              src={defaultPath.concat(item.coverPath)}
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
                <Image src={playingGif} width={16} alt="Icon playing music" />
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
  )
}
