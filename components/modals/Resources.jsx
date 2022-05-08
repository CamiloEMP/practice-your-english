import Link from 'next/link'

export const Resources = () => {
  const resources = [
    { href: '/dashboard/list/verbs/irregular', title: 'Irregular verb list' },
    { href: '/dashboard/list/verbs/irregular', title: 'More coming soon...' },
  ]

  return (
    <ul>
      {resources.map(({ href, title }, index) => (
        <li key={index}>
          <Link href={href}>
            <a className="block text-center bg-emerald-900 bg-opacity-50 hover:bg-opacity-100 py-2">
              {title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
