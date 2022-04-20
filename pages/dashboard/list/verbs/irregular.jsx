import { timesVerbs } from 'constants/timesVerbs'

import { getIrregularVerbs } from 'services/getIrregularVerbs'
// TODO: Implement a filter for irregular verbs and a search
export default function Irregular({ verbs }) {
  return (
    <section className="w-10/12 mx-auto">
      <h2 className="text-3xl md:text-5xl uppercase text-center mb-20 font-bold">
        Irregular Verbs
      </h2>
      <div className="grid grid-cols-4 bg-emerald-700 px-2 py-4 text-lg md:text-xl font-semibold rounded-sm text-emerald-50">
        {timesVerbs.map(time => (
          <span key={time.id}>{time.title}</span>
        ))}
      </div>
      {verbs.map(verb => (
        <div
          key={verb.id}
          className="grid grid-cols-4 mt-4 text-base md:text-lg even:bg-emerald-700 even:text-emerald-50 even:py-3 px-2 even:rounded-sm"
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
