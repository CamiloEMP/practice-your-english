import Link from 'next/link'

export const MiniGame = ({ title, url, children }) => {
  return (
    <section className="flex flex-col gap-4 w-64">
      <h5 className="bg-emerald-600 rounded-sm text-teal-50 text-xl text-center my-2 py-3">
        {title}
      </h5>
      <p className="text-justify">{children}</p>
      <Link href={url}>
        <a className="bg-emerald-600 py-2 text-teal-50 text-center rounded-sm transition-transform hover:scale-105">
          ¡Play NOW!
        </a>
      </Link>
    </section>
  )
}
