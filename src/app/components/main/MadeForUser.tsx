import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'

const defaultPath = '/img/made-for-user/'

interface MadeForItem {
  title: string
  description: string
  coverImage: string
}

const listOfMadeFor: MadeForItem[] = [
  {
    title: 'Daily Mix 1',
    description: 'Coldplay, TOTO, Bryan Adams and more',
    coverImage: 'daily-mix-1.jpg',
  },
  {
    title: 'Daily Mix 3',
    description: 'Michael Jackson, The Temptations, Kool & The Gang...',
    coverImage: 'daily-mix-3.jpg',
  },
  {
    title: 'Daily Mix 4',
    description: 'Avicii, Allie X, Calvin Harris and more',
    coverImage: 'daily-mix-4.jpg',
  },
  {
    title: 'Daily Mix 5',
    description: 'for KING & COUNTRY, Hillsong UNITED, Hillsong Young & Fre...',
    coverImage: 'daily-mix-5.jpg',
  },
  {
    title: 'Daily Mix 6',
    description: 'John Mayer, Counting Crows, The Goo Goo Dolls and more',
    coverImage: 'daily-mix-6.jpg',
  },
  {
    title: 'Release Radar',
    description:
      'Catch all the latest music from artists you follow, plus new...',
    coverImage: 'release-radar.jpg',
  },
]

export const MadeForUser = () => {
  return (
    <div className="mt-14 flex flex-col gap-1">
      {/* heading */}
      <div className="flex items-center justify-between px-6">
        <h2 className="cursor-pointer text-2xl font-bold tracking-tighter text-white hover:underline">
          Made For Eliel Alves
        </h2>
        <span className="cursor-pointer text-sm font-bold hover:text-white hover:underline">
          Show all
        </span>
      </div>

      {/* grid */}
      <div className="grid grid-cols-6 px-3">
        {listOfMadeFor.map((item, index) => {
          return (
            <div
              key={index}
              className="hover-trigger flex cursor-pointer flex-col gap-1 rounded-md p-3 hover:bg-zinc-900 active:bg-black"
            >
              <div className="relative size-218">
                <button className="play-pause-icon absolute bottom-0 right-0 z-10 m-2 rounded-full bg-green-spotify p-3.5 shadow-xl hover:scale-105">
                  <FaPlay size={20} className="pl-1 text-black" />
                </button>
                <Image
                  src={defaultPath.concat(item.coverImage)}
                  alt=""
                  fill
                  quality={100}
                  className="rounded-md"
                />
              </div>

              <h5 className="mt-1 text-white">{item.title}</h5>
              <p className="text-sm">{item.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
