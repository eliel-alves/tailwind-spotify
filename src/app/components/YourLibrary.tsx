import { ArrowRight, LibraryBig, Plus } from 'lucide-react'
import { LibraryItems } from './LibraryItems'

export const YourLibrary = () => {
  return (
    <section className="flex h-full flex-col gap-2 overflow-y-hidden rounded-lg bg-gray-spotify">
      {/* navbar icons library */}
      <nav className="flex items-center justify-between pl-6 pr-4 pt-3">
        <div className="flex cursor-pointer gap-3 font-bold transition-colors duration-300 hover:text-white">
          <LibraryBig /> Your Library
        </div>
        <div className="flex gap-2">
          <Plus className="box-content cursor-pointer rounded-full p-1 transition-colors duration-300 hover:bg-zinc-900 hover:text-white" />
          <ArrowRight className="box-content cursor-pointer rounded-full p-1 transition-colors duration-300 hover:bg-zinc-900 hover:text-white" />
        </div>
      </nav>

      {/* categories list */}
      <div className="flex gap-2 px-4 pt-3 text-sm text-white">
        <span className="flex h-8 cursor-pointer items-center rounded-full bg-zinc-800/80 px-3 transition-colors duration-300 hover:bg-zinc-700/60">
          Playlists
        </span>
        <span className="flex h-8 cursor-pointer items-center rounded-full bg-zinc-800/80 px-3 transition-colors duration-300 hover:bg-zinc-700/60">
          Artists
        </span>
        <span className="flex h-8 cursor-pointer items-center rounded-full bg-zinc-800/80 px-3 transition-colors duration-300 hover:bg-zinc-700/60">
          Albums
        </span>
      </div>

      {/* library list items */}
      <LibraryItems />
    </section>
  )
}
