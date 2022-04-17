import { useState } from 'react'
import Link from 'next/link'
import { useIrregularVerbs } from 'hook/useIrregularVerbs'

import { Spinner } from '../Spinner'

export const ListOfVerbs = () => {
  const { verbs, loading } = useIrregularVerbs()
  const [inputSearh, setInputSearh] = useState('')

  return (
    <>
      <input
        className="py-2 px-4 mb-4 outline-none w-full"
        placeholder="Search a verb"
        type="text"
        onChange={e => setInputSearh(e.target.value)}
      />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-6">
          {verbs
            .filter(verb => {
              if (inputSearh === '') {
                return verb
              } else if (verb.infinitive.toLowerCase().includes(inputSearh.toLocaleLowerCase())) {
                return verb
              }
            })
            .map(verb => (
              <Link
                key={verb.id}
                href={{
                  pathname: `/dashboard/practice/sentences/${verb.id}`,
                  query: { verb: JSON.stringify(verb) },
                }}
              >
                <a className="pl-2 py-2 border-b-4 border-emerald-600 text-lg hover:bg-emerald-400 dark:hover:bg-emerald-800 transition-colors">
                  {verb.infinitive}
                </a>
              </Link>
            ))}
        </div>
      )}
    </>
  )
}
