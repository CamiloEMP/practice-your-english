import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useUser } from '@supabase/supabase-auth-helpers/react'

export const Header = () => {
  const router = useRouter()
  const { user } = useUser()

  async function signout() {
    await supabaseClient.auth.signOut()
    router.push('/login')
  }

  return (
    <header className="w-full h-24 relative flex justify-between items-center bg-emerald-500 text-white px-8 mt-4 mb-24 rounded-md">
      <h1 className="text-3xl font-black">Practice your English</h1>
      <nav>
        <ul className="flex items-center gap-8 text-xl font-bold">
          <li className="transition-transform hover:scale-110">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="transition-transform hover:scale-110">
            <Link href="/creator"> Creator</Link>
          </li>
          {user && (
            <li className="transition-transform hover:scale-110">
              <Link href="/dashboard">Dashboard</Link>
            </li>
          )}
          {user ? (
            <li>
              <Link passHref href="/">
                <button
                  className="border-2 border-white py-1 px-4 rounded-md transition-colors hover:bg-white hover:text-emerald-500"
                  onClick={signout}
                >
                  Sign Out
                </button>
              </Link>
            </li>
          ) : (
            <li>
              <Link href="/login">
                <a className="border-2 border-white py-1 px-4 rounded-md transition-colors hover:bg-white hover:text-emerald-500">
                  Login
                </a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
