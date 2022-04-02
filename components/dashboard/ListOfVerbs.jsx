import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { getListOfVerbs } from '../../services/getListOfVerbs'

export const ListOfVerbs = () => {
  const router = useRouter()
  const [verbs, setVerbs] = useState([])
  const [loading, setLoading] = useState(true)
  const [inputSearh, setInputSearh] = useState('')

  useEffect(() => {
    getListOfVerbs(setLoading).then(data => setVerbs(data))
  }, [])

  return (
    <>
      <input
        className="py-2 px-4 mb-4 outline-none w-full"
        placeholder="Search a verb"
        type="text"
        onChange={e => setInputSearh(e.target.value)}
      />
      {loading ? (
        <span>loading...</span>
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
            .map((verb, index) => (
              <Link key={index} href={`${router.pathname}/${index}`}>
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
