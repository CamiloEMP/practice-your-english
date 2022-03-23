import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header className="w-full h-24 flex justify-between items-center bg-sky-400 text-white px-8 mt-4 rounded-md">
      <h1 className="text-3xl font-black">Practice your English</h1>
      <nav>
        <ul className="flex gap-8 text-xl font-bold">
          <li className="transition-transform hover:scale-110">
            <Link href="/Creator">Creator</Link>
          </li>
          <li>
            <Link href="/">
              <a className="border-2 border-white py-1 px-4 rounded-md transition-colors hover:bg-white hover:text-sky-400">
                Login
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
