import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { RiSunLine, RiMoonLine } from 'react-icons/ri'

export const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    if (currentTheme === 'dark') {
      return <RiSunLine className="w-8 h-8" role="button" onClick={() => setTheme('light')} />
    } else {
      return <RiMoonLine className="w-8 h-8" role="button" onClick={() => setTheme('dark')} />
    }
  }

  async function signout() {
    await supabaseClient.auth.signOut()
    router.push('/login')
  }

  return (
    <header className="text-slate-100 w-full h-24 relative flex justify-between items-center bg-emerald-600 px-8 mt-4 mb-20 rounded-md">
      <h1 className="text-3xl font-black">Practice your English</h1>
      <nav>
        <ul className="flex items-center gap-8 text-xl font-bold">
          <li className="transition-transform hover:scale-110">
            <Link href={user ? '/dashboard' : '/'}>Home</Link>
          </li>
          <li className="transition-transform hover:scale-110">
            <Link href="/creator"> Creator</Link>
          </li>
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
          {renderThemeChanger()}
        </ul>
      </nav>
    </header>
  )
}
