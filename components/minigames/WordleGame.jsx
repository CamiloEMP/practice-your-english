import { GUESS_LENGTH, WORD_LENGTH } from 'constants/wordle-config'

import { Modal } from 'components/modals/Modal'
import { useEffect, useState } from 'react'
import { getRandomWord } from 'utils/wordle-utils'

import { WordRow } from './WordRow'

export const WordleGame = ({ verbs = [] }) => {
  const [word, setWord] = useState('')
  const [guess, setGuess] = useState('')
  const [guessStates, setGuessStates] = useState([])
  const [isGameOver, setIsGameOver] = useState(false)
  const [newGame, setNewGame] = useState(false)

  let rows = [...guessStates]

  if (rows.length < GUESS_LENGTH) {
    rows.push(guess)
  }

  const numberOfGuessRemaining = GUESS_LENGTH - rows.length

  rows = rows.concat(Array(numberOfGuessRemaining).fill(''))

  const handleChange = e => {
    const newGuess = e.target.value

    if (newGuess.length === WORD_LENGTH) {
      setGuessStates([...guessStates, newGuess])
      setGuess('')

      return
    }
    setGuess(newGuess)
  }

  useEffect(() => {
    if (verbs.length > 0) {
      const wordForGame = getRandomWord(verbs)

      setWord(wordForGame)
    }
  }, [newGame, verbs])

  useEffect(() => {
    if (guessStates.length === GUESS_LENGTH) {
      setGuess('')
      setGuessStates([])
    }
  }, [guessStates])

  return (
    <section className="max-w-lg mx-auto grid grid-rows-6 gap-2 md:gap-4 px-2">
      <input
        className="w-1/2 h-9"
        disabled={isGameOver}
        type="text"
        value={guess}
        onChange={handleChange}
      />
      {rows.length > 0
        ? rows.map((letterRow, index) => <WordRow key={index} answer={word} word={letterRow} />)
        : null}
      {isGameOver && (
        <Modal>
          <button
            onClick={() => {
              setNewGame(true)
              setIsGameOver(false)
            }}
          >
            New game
          </button>
        </Modal>
      )}
    </section>
  )
}
