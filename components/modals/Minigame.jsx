import { useOptions } from 'hook/useOptions'
import { useRouter } from 'next/router'

export const Minigame = () => {
  const { setOptionsMinigame } = useOptions()
  const router = useRouter()
  const minigames = [
    { href: '/dashboard/minigames/memory', title: 'Memory game' },
    { href: '/dashboard/minigames/play', title: 'Wordle' },
    { href: '/dashboard/minigames/play', title: 'Find Verb' },
  ]

  return (
    <ul className="text-2xl space-y-8 mt-4">
      {minigames.map(({ href, title }, index) => (
        <li key={index}>
          <button
            className="w-full text-center bg-emerald-900 bg-opacity-50 hover:bg-opacity-100 py-2"
            onClick={() => {
              setOptionsMinigame({
                minigame: title.toLowerCase(),
              })
              router.push(href)
            }}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  )
}
