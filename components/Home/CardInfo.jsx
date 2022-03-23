import React from 'react'

export const CardInfo = ({ children, title }) => {
  return (
    <article className="max-w-xs border-4 border-sky-400 p-4 rounded-lg transition-transform hover:scale-95">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-lg mt-4">{children}</p>
    </article>
  )
}
