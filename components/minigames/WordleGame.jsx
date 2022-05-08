import { useEffect, useState, useCallback } from 'react'

const KeyBoard = () => {}

const Board = () => {}

export const WordleGame = ({ verbs }) => {
  const [word, setWord] = useState({})

  const getRandomWord = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * verbs.length)

    setWord(verbs[randomIndex])
  }, [verbs])

  useEffect(() => {
    getRandomWord()
  }, [verbs, getRandomWord])

  return (
    <section>
      <button onClick={() => getRandomWord()}>New game</button>
      <p>{word.infinitive}</p>
    </section>
  )
}
