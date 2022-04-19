import { RenderListItems } from 'components/modals/RenderListItems'

export const Minigame = () => {
  const minigames = [
    { href: '/dashboard/minigames/memory', title: 'Memory game' },
    { href: '/dashboard/minigames/memory', title: 'Find the verb' },
    { href: '/dashboard/minigames/memory', title: 'Wordle' },
  ]

  return (
    <>
      <RenderListItems data={minigames} />
    </>
  )
}
