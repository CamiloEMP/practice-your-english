import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useOptions } from 'hook/useOptions'
import { getIrregularVerbs } from 'services/getIrregularVerbs'
import { MemoryGame } from 'components/minigames/MemoryGame'
import { FindVerbGame } from 'components/minigames/FindVerbGame'
import { WordleGame } from 'components/minigames/WordleGame'

export default function PlayMinigame({ verbs = [] }) {
  const router = useRouter()
  const { options, isEmpty } = useOptions()

  useEffect(() => {
    if (isEmpty) {
      router.push('/')
    }
  }, [isEmpty, router])

  return (
    <section>
      {!isEmpty ? (
        <>
          {options.minigame === 'memory game' ? (
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
