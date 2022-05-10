import { WORD_LENGTH, boxStateStyles } from 'constants/wordle-config'

import { computeGuess } from 'utils/wordle-utils'

function LetterBox({ letter, state }) {
  const stateStyles = state == null ? '' : boxStateStyles[state]

  return (
    <div
      className={`h-20 border-2 border-black dark:border-white uppercase text-lg md:text-2xl py-4 px-2 md:p-4 flex justify-center items-center font-bold text-center ${stateStyles}`}
    >
      <span>{letter}</span>
    </div>
  )
}

export const WordRow = ({ word = '', answer }) => {
  const lettersReaming = WORD_LENGTH - word.length
  const letters = word.split('').concat(Array(lettersReaming).fill(''))
  const guessStates = computeGuess(word, answer)

  return (
    <div className="grid grid-cols-5 gap-2 md:gap-4">
      {letters.map((letter, index) => (
        <LetterBox key={index} letter={letter} state={guessStates[index]} />
      ))}
    </div>
  )
}
