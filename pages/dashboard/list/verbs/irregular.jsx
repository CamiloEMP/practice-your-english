import { timesVerbs } from 'constants/timesVerbs'

import { getIrregularVerbs } from 'services/getIrregularVerbs'

export default function Irregular({ verbs }) {
  return (
    <section className="w-10/12 mx-auto">
      <div className="grid grid-cols-4 text-lg font-semibold">
        {timesVerbs.map(time => (
          <span key={time.id}>{time.title}</span>
        ))}
      </div>
      {verbs.map(verb => (
        <div
          key={verb.id}
          className="grid border-b-2 border-transparent grid-cols-4 mt-4 hover:border-emerald-600"
        >
          <span>{verb.infinitive}</span>
          <span>{verb.past_simple}</span>
          <span>{verb.past_participle}</span>
          <span>{verb.translation}</span>
        </div>
      ))}
    </section>
  )
}

export const getStaticProps = async () => {
  const verbs = await getIrregularVerbs()

  return {
    props: {
      verbs,
    },
  }
}
