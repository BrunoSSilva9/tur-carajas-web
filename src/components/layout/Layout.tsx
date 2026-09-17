import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { BottomNav } from './BottomNav'

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Header />
      <main className="flex flex-col w-full pt-16 pb-24 min-h-screen">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
