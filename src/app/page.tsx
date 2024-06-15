import { Footer } from './components/Footer'
import { Sidebar } from './components/Sidebar'

export default function Home() {
  return (
    <div className="flex h-screen flex-col gap-2 p-2">
      <div className="flex flex-1 gap-2 overflow-hidden">
        <Sidebar />
        <main className="flex-1 rounded-lg bg-gray-spotify p-6">main</main>
      </div>
      <Footer />
    </div>
  )
}
