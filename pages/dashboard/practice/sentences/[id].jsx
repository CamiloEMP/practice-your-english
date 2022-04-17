import { timesVerbs } from 'constants/timesVerbs'

import { useState } from 'react'
import { SentencesLayout } from 'layout/SentecesLayout'
import { TextArea } from 'components/TextArea'
import { useForm } from 'hook/useForm'
import { validateNewSentence } from 'validations/validateNewSentence'
import { getIrregularVerbs } from 'services/getIrregularVerbs'
import { addSentece } from 'services/addSenteces'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

function SentencesId({ verb, setShow }) {
  const { user } = useUser()
  const { values, handleChange, setValues } = useForm({
    infinitive: '',
    pastSimple: '',
    pastParticiple: '',
  })
  const [error, setError] = useState('')

  const wordInfinitive = verb.infinitive
  const wordPastParticiple = verb.past_participle
  const wordPastSimple = verb.past_simple

  function handleSubmit(e) {
    e.preventDefault()

    const isValid = validateNewSentence({
      values,
      wordInfinitive,
      wordPastParticiple,
      wordPastSimple,
      setError,
    })

    if (isValid) {
      addSentece(values, verb.id, user.id).then(data => (data ? setShow(true) : null))
      setValues({ infinitive: '', pastSimple: '', pastParticiple: '' })
    }
  }

  return (
    <div className="sticky top-10">
      <button onClick={() => setShow(true)}>Modal</button>
      <div className="mb-12">
        {Object.values(verb)
          .slice(0, 4)
          .map((item, index) => (
            <span key={index} className="text-xl text-emerald-600 dark:text-emerald-400">
              {item} {index < 3 ? '-' : ''}{' '}
            </span>
          ))}
      </div>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {timesVerbs.slice(0, 3).map(item => (
          <TextArea
            key={item.id}
            handleChange={handleChange}
            identifier={item.value}
            setError={setError}
            title={item.description}
            value={values[item.value]}
          />
        ))}
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

export const getStaticPaths = async () => {
  const verbs = await getIrregularVerbs()

  return {
    paths: verbs.map(verb => ({ params: { id: JSON.stringify(verb.id) } })),
    fallback: true,
  }
}

export const getStaticProps = async ({ params }) => {
  const { id } = params
  const { data } = await supabaseClient.from('list_verbs').select().filter('id', 'eq', id).single()

  return {
    props: {
      verb: data,
    },
  }
}

SentencesId.PageLayout = SentencesLayout
export default SentencesId
