import { Footer } from './components/footer/Footer'
import { Sidebar } from './components/sidebar/Sidebar'
import { MainContent } from './components/MainContent'

export default function Home() {
  return (
    <div className="flex h-screen flex-col gap-2 p-2">
      <div className="flex flex-1 gap-2 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
