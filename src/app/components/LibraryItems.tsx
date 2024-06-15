import Image from 'next/image'
import { Dot, List, Search } from 'lucide-react'
import { BsFillPinAngleFill } from 'react-icons/bs'

import { capitalize } from '@/utils/capitalize'

const defaultPath = '/img/library-items'

interface LibraryItem {
  name: string
  author?: string
  type: 'artist' | 'album' | 'playlist'
  image: string
}

const libraryItems: LibraryItem[] = [
  {
    name: 'Coldplay',
    type: 'artist',
    image: `${defaultPath}/coldplay.webp`,
  },
  {
    name: 'Memórias 3 (Ao Vivo)',
    type: 'album',
    author: 'Eli Soares',
    image: `${defaultPath}/memorias-3.webp`,
  },
  {
    name: '📻 flahBack',
    type: 'playlist',
    author: 'Pegas',
    image: `${defaultPath}/flashback.webp`,
  },
  {
    name: 'This Is Michael Jackson',
    type: 'playlist',
    author: 'Spotify',
    image: `${defaultPath}/this-is-michael-jackson.jpg`,
  },
  {
    name: 'Michael Jackson',
    type: 'artist',
    image: `${defaultPath}/michael-jackson.webp`,
  },
  {
    name: 'FILIPE MARTINS REFERENCES',
    type: 'playlist',
    author: 'Filipe Martins',
    image: `${defaultPath}/filipe-martins-experience.jpg`,
  },
  {
    name: '📼 Elph Retro',
    type: 'playlist',
    author: 'Pegas',
    image: `${defaultPath}/elph-retro.webp`,
  },
  {
    name: 'Djesse Vol. 4',
    type: 'album',
    author: 'Jacob Collier',
    image: `${defaultPath}/djesse-vol-4.webp`,
  },
  {
    name: 'Jacob Collier',
    type: 'artist',
    image: `${defaultPath}/jacob-collier.webp`,
  },
  {
    name: 'Boiolinha',
    type: 'playlist',
    author: 'josi.alves369',
    image: `${defaultPath}/boiolinha.jpg`,
  },
  {
    name: 'Eliel + 8 others',
    type: 'playlist',
    author: 'Spotify',
    image: `${defaultPath}/eliel-others.jpg`,
  },
  {
    name: 'What Are We Waiting For?',
    type: 'album',
    author: 'for KING & COUNTRY',
    image: `${defaultPath}/what-are-we-waiting-for.webp`,
  },
  {
    name: 'Relax eletro',
    type: 'playlist',
    author: 'Sega',
    image: `${defaultPath}/relax-eletro.jpg`,
  },
  {
    name: '🌌 Atmosphere',
    type: 'playlist',
    author: 'Pegas',
    image: `${defaultPath}/atmosphere.webp`,
  },
  {
    name: 'Ainda em 2020',
    type: 'album',
    author: 'Paulo Cesar Baruk',
    image: `${defaultPath}/ainda-em-2020.webp`,
  },
  {
    name: 'Good Musics',
    type: 'playlist',
    author: 'Eliel Alves',
    image: `${defaultPath}/god-musics.jpg`,
  },
  {
    name: 'Memórias 2 (Ao Vivo)',
    type: 'album',
    author: 'Eli Soares',
    image: `${defaultPath}/memorias-2.webp`,
  },
  {
    name: 'Black & Soul Gospel',
    type: 'playlist',
    author: 'Peterson Andrade',
    image: `${defaultPath}/black-soul-gospel.webp`,
  },
  {
    name: '💣 EDeMe',
    type: 'playlist',
    author: 'Pegas',
    image: `${defaultPath}/edeme.webp`,
  },
  {
    name: 'Awake',
    type: 'album',
    author: 'Hillsong Worship',
    image: `${defaultPath}/awake.webp`,
  },
  {
    name: '🎧 Elph Music',
    type: 'playlist',
    author: 'Pegas',
    image: `${defaultPath}/elph-musics.webp`,
  },
  {
    name: 'Chill Tracks',
    type: 'playlist',
    author: 'Spotify',
    image: `${defaultPath}/chill-tracks.jpg`,
  },
  {
    name: 'Advento Tour - Ao Vivo em São Paulo',
    type: 'album',
    author: 'Projeto Sola',
    image: `${defaultPath}/advento-tour.webp`,
  },
  {
    name: 'Dance Hits',
    type: 'playlist',
    author: 'Spotify',
    image: `${defaultPath}/dance-hits.jpg`,
  },
  {
    name: 'San Holo Radio',
    type: 'playlist',
    author: 'Spotify',
    image: `${defaultPath}/san-holo-radio.jpg`,
  },
  {
    name: 'Hillsong Young & Free',
    type: 'artist',
    image: `${defaultPath}/hillsong-yef.webp`,
  },
  {
    name: 'Hillsong Worship',
    type: 'artist',
    image: `${defaultPath}/hillsong-worship.webp`,
  },
  {
    name: 'Hillsong UNITED',
    type: 'artist',
    image: `${defaultPath}/hillsong-united.webp`,
  },
  {
    name: 'San Holo',
    type: 'artist',
    image: `${defaultPath}/san-holo.webp`,
  },
]

const subtitle = (item: LibraryItem) => {
  if (item.type === 'artist') {
    return <p className="flex items-center justify-start text-sm">Artist</p>
  } else {
    const type = capitalize(item.type)

    return (
      <p className="flex items-center justify-start gap-0 text-sm">
        {type} <Dot size={20} /> {item.author}
      </p>
    )
  }
}

export const LibraryItems = () => {
  return (
    <div className="gutter h-full overflow-y-hidden overscroll-y-contain px-2 pb-2 hover:overflow-y-scroll">
      {/* search icon and filter */}
      <div className="flex items-center justify-between px-2">
        <Search
          size={18}
          className="box-content cursor-pointer rounded-full p-2 transition-colors duration-300 hover:bg-zinc-800 hover:text-white"
        />
        <span className="flex cursor-pointer items-center justify-center gap-1 pr-2 text-sm hover:text-white">
          Recents <List size={18} />
        </span>
      </div>

      {/* first item: liked songs */}
      <div className="mt-2 flex cursor-pointer gap-3 rounded-md p-2 hover:bg-zinc-900 active:bg-black">
        <Image
          src="/img/library-items/liked-songs.png"
          alt=""
          className="rounded"
          width={48}
          height={48}
          quality={100}
        />
        <div className="flex flex-col">
          <p className="text-white">Liked Songs</p>
          <span className="flex items-center justify-start text-sm">
            <BsFillPinAngleFill className="box-content pr-2 text-green-spotify" />
            Playlist <Dot size={20} /> 6 songs
          </span>
        </div>
      </div>

      {/* library items from list */}
      {libraryItems.map((item, index) => {
        return (
          <div
            key={index}
            className="flex cursor-pointer gap-3 rounded-md p-2 hover:bg-zinc-900 active:bg-black"
          >
            <Image
              src={item.image}
              alt=""
              className={item.type === 'artist' ? 'rounded-full' : 'rounded'}
              width={48}
              height={48}
              quality={100}
            />
            <div className="flex flex-col">
              <p className="text-white">{item.name}</p>
              {subtitle(item)}
            </div>
          </div>
        )
      })}
    </div>
  )
}
