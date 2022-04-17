import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { SentencesLayout } from 'layout/SentecesLayout'
import { TextArea } from 'components/TextArea'
import validationAndSubmit from 'utils/validationIrregularVerbs'
import { addSentece } from 'services/addSenteces'

function SentencesId({ setShow }) {
  const { user } = useUser()
  const formRef = useRef()
  const {
    query: { id, verb },
  } = useRouter()
  const parseVerb = JSON.parse(verb)
  const [error, setError] = useState('')

  const verbInfinitive = parseVerb.infinitive
  const verbPastParticiple = parseVerb.past_participle
  const verbPastSimple = parseVerb.past_simple

  function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const sentences = Object.fromEntries(formData)

    const isValid = validationAndSubmit({
      sentences,
      verbInfinitive,
      verbPastParticiple,
      verbPastSimple,
      setError,
      formRef,
    })

    if (isValid) {
      addSentece(sentences, id, user.id).then(data => (data ? setShow(true) : null))
    }
  }

  return (
    <div className="sticky top-10">
      <button onClick={() => setShow(true)}>Modal</button>
      <div className="mb-12">
        {Object.values(parseVerb)
          .slice(0, 4)
          .map((item, index) => (
            <span key={index} className="text-xl text-emerald-600 dark:text-emerald-400">
              {item} {index < 3 ? '-' : ''}{' '}
            </span>
          ))}
      </div>
      <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
        <TextArea
          identifier="infinitive"
          setError={setError}
          title="Sentence with the verb in Infinitive"
        />
        <TextArea
          identifier="pastSimple"
          setError={setError}
          title="Sentence with the verb in Past"
        />
        <TextArea
          identifier="pastParticiple"
          setError={setError}
          title="Sentence with the verb in Past Participle"
        />
        {error && <p className="text-lg text-red-600 text-center">{error}</p>}
        <div className="flex">
          <button
            className="text-xl w-full rounded-sm border-2 border-emerald-600 py-4 transition-colors hover:bg-emerald-600 hover:text-slate-100"
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
