import { RecentItemsPlayed } from './main/RecentItemsPlayed'
import { MadeForUser } from './main/MadeForUser'
import { YourFavoriteArtists } from './main/YourFavoriteArtists'
import { MainTopBar } from './main/MainTopBar'

export const MainContent = () => {
  return (
    <main className="gutter flex-1 overflow-y-hidden rounded-lg bg-gray-spotify hover:overflow-y-scroll">
      {/* main topbar */}
      <MainTopBar />

      {/* recent items played */}
      <RecentItemsPlayed />

      {/* made for user */}
      <MadeForUser />

      {/* favorite artists */}
      <YourFavoriteArtists />
    </main>
  )
}
