import Link from 'next/link'

export const RenderListItems = ({ data }) => {
  return (
    <ul className="text-2xl space-y-8 mt-4">
      {data.map(({ href, title }, index) => (
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
