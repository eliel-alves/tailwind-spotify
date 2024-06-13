import { Ellipsis, Minus, RectangleHorizontal, X } from 'lucide-react'

export const TopBar = () => {
  return (
    <header className="flex items-center justify-between rounded-t-lg">
      <div className="px-5">
        <Ellipsis size={24} />
      </div>
      <div className="flex">
        <Minus size={16} className="box-content hover:bg-zinc-600 py-2 px-3" />
        <RectangleHorizontal
          size={16}
          className="box-content hover:bg-zinc-600 py-2 px-3"
        />
        <X
          size={16}
          className="box-content rounded-tr-lg hover:bg-red-600 py-2 px-3"
        />
      </div>
    </header>
  )
}
