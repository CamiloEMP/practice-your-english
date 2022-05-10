import { useEffect, useState, useCallback } from 'react'

import { WordRow } from './WordRow'

export const WordleGame = ({ verbs }) => {
  const [word, setWord] = useState('')

  const computeGuess = useCallback((guess, answerString) => {
    const results = []
    const answerArray = answerString.split('')
    const guessArray = guess.split('')

    guessArray.forEach((letter, index) => {
      if (letter === answerArray[index]) {
        results.push('Match') // Match
      } else if (answerArray.includes(letter)) {
        results.push('Partial') // Partial match
      } else {
        results.push('Miss') // No match
      }
    })

    return results
  }, [])

  const result = computeGuess(word, verbs[0].infinitive)

  console.log(result)

  const getRandomWord = useCallback(() => {
    const randomGroupWord = verbs[Math.floor(Math.random() * verbs.length)]
    const values = Object.values(randomGroupWord)
    const notSpanish = values.slice(0, 3)
    const word = notSpanish[Math.floor(Math.random() * notSpanish.length)]

    if (word.length <= 5) {
      setWord(word)
    } else {
      getRandomWord()
    }
  }, [verbs])

  useEffect(() => {
    getRandomWord()

    return () => {
      setWord('')
    }
  }, [getRandomWord])

  return (
    <section>
      <button onClick={() => getRandomWord()}>New game</button>
      <WordRow letter={word} />
      <WordRow letter={word} />
      <WordRow letter={word} />
      <WordRow letter={word} />
      <WordRow letter={word} />
    </section>
  )
}
