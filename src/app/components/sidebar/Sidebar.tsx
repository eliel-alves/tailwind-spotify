import { HomeIcon, Search } from 'lucide-react'
import { YourLibrary } from './YourLibrary'

export const Sidebar = () => {
  return (
    <aside className="flex w-[420px] flex-col gap-2">
      {/* top navbar icons */}
      <nav className="flex flex-col gap-6 rounded-lg bg-gray-spotify px-6 py-5 font-bold">
        <div className="flex cursor-pointer gap-5 text-white transition-colors duration-300">
          <HomeIcon /> Home
        </div>
        <div className="flex cursor-pointer gap-5 transition-colors duration-300 hover:text-white">
          <Search /> Search
        </div>
      </nav>

      {/* your library container */}
      <YourLibrary />
    </aside>
  )
}
