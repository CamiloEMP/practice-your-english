import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useOptions } from 'hook/useOptions'
import { getIrregularVerbs } from 'services/getIrregularVerbs'
import { MemoryGame } from 'components/minigames/MemoryGame'
import { FindVerbGame } from 'components/minigames/FindVerbGame'
import { WordleGame } from 'components/minigames/WordleGame'

export default function PlayMinigame({ verbs }) {
  // console.log({ verbs })
  const router = useRouter()
  const { options, isEmpty } = useOptions()

  // console.log({ options })
  useEffect(() => {
    if (isEmpty) {
      router.push('/')
    }
  }, [isEmpty, router])

  return (
    <section>
      {!isEmpty ? (
        <>
          <h2 className="text-3xl md:text-4xl font-bold text-center capitalize mb-12">
            {options.minigame} game
          </h2>
          {options.minigame === 'memory' ? (
            <MemoryGame optionsGame={options} verbs={verbs} />
          ) : options.minigame === 'find verb' ? (
            <FindVerbGame verbs={verbs} />
          ) : options.minigame === 'wordle' ? (
            <WordleGame verbs={verbs} />
          ) : null}
        </>
      ) : null}
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
