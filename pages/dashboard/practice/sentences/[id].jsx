import { useRouter } from 'next/router'
import { useRef } from 'react'

import { SentencesLayout } from '../../../../layout/SentecesLayout'

function SentencesId() {
  const formRef = useRef()
  const {
    query: { id, verb },
  } = useRouter()
  const parseVerb = JSON.parse(verb)

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const values = Object.fromEntries(formData)

    formRef.current.reset()
  }

  return (
    <div>
      <div className="mb-12">
        {Object.values(parseVerb)
          .slice(0, 4)
          .map((item, index) => (
            <span key={index} className="text-lg text-emerald-600 dark:text-emerald-400">
              {item} {index < 3 ? '-' : ''}{' '}
            </span>
          ))}
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="mb-8">
          <label className="mb-2" htmlFor="infinitive">
            Sentence with the verb in Infinitive
          </label>
          <textarea
            autoFocus={true}
            className="mt-2 w-full py-2 px-4 border-2 rounded-sm border-transparent resize-y max-h-52 min-h-[120px] focus:outline-none focus:border-emerald-600"
            id="infinitive"
            name="infinitive"
          />
        </div>
        <div className="mb-8">
          <label className="mb-2" htmlFor="pSimple">
            Sentence with the verb in Past simple
          </label>
          <textarea
            className="mt-2 w-full py-2 px-4 border-2 rounded-sm border-transparent resize-y max-h-52 min-h-[120px] focus:outline-none focus:border-emerald-600"
            id="pSimple"
            name="pSimple"
          />
        </div>
        <div className="mb-8">
          <label className="mb-2" htmlFor="pParticipe">
            Sentence with the verb in Past participe
          </label>
          <textarea
            className="mt-2 w-full py-2 px-4 border-2 rounded-sm border-transparent resize-y max-h-52 min-h-[120px] focus:outline-none focus:border-emerald-600"
            id="pParticipe"
            name="pParticipe"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="text-lg rounded-sm border-2 border-emerald-600 px-12 py-2 transition-colors hover:bg-emerald-600 hover:text-slate-100"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

SentencesId.PageLayout = SentencesLayout
export default SentencesId
