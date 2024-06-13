import { Ellipsis, Minus, RectangleHorizontal, Square, X } from "lucide-react";
import { TopBar } from "./components/TopBar";

export default function Home() {
  return (
    <div className="h-full flex flex-col border border-zinc-700 bg-black rounded-lg">
      <TopBar />
      <div className="h-full flex flex-col gap-2 rounded-sm p-2 pt-0">
        <div className="flex flex-1">
          <aside className="flex flex-col gap-2 w-72">
            <nav className="bg-zinc-900 p-6 rounded-md">
              <a href="">Home</a>
              <a href="">Search</a>
            </nav>
            <section className="flex-1 bg-zinc-900 p-6 rounded-md">
              <nav>
                <a href="">Your Library</a>
              </nav>
            </section>
          </aside>
          <main className="flex-1 p-6">
            main
          </main>
        </div>
        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 rounded-md">
          footer
        </footer>
      </div>
    </div>
  )
}
