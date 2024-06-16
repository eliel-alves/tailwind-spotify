import Image from 'next/image'
import { FaPlay } from 'react-icons/fa6'

const defaultPath = '/img/favorite-artists/'

interface FavoriteArtist {
  name: string
  coverImage: string
}

const listOfFavoriteArtists: FavoriteArtist[] = [
  {
    name: 'Boy In Space',
    coverImage: 'boy-in-space.jpg',
  },
  {
    name: 'A R I Z O N A',
    coverImage: 'arizona.jpg',
  },
  {
    name: 'Lauv',
    coverImage: 'lauv.jpg',
  },
  {
    name: 'Fly By Midnight',
    coverImage: 'fly-by-midnight.jpg',
  },
  {
    name: 'Loote',
    coverImage: 'loote.jpg',
  },
  {
    name: 'The Chainsmokers',
    coverImage: 'the-chainsmokers.jpg',
  },
]

export const YourFavoriteArtists = () => {
  return (
    <div className="mb-3 mt-14 flex flex-col gap-1">
      {/* heading */}
      <div className="flex items-center justify-between px-6">
        <h2 className="cursor-pointer text-2xl font-bold tracking-tighter text-white hover:underline">
          Your favorite artists
        </h2>
        <span className="cursor-pointer text-sm font-bold hover:text-white hover:underline">
          Show all
        </span>
      </div>

      {/* grid */}
      <div className="grid grid-cols-6 px-3">
        {listOfFavoriteArtists.map((item, index) => {
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
                  objectFit="cover"
                  quality={100}
                  className="rounded-full"
                />
              </div>

              <h5 className="mt-1 text-white">{item.name}</h5>
              <p className="text-sm">Artist</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
