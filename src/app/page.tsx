import { SideBar } from '@/components/SideBar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <SideBar />

        <main>
          <h1>ChatGPT</h1>
        </main>

      </div>
    </div>
  )
}
