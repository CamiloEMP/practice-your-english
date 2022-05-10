const LETTER_LENGTH = 5

function LetterBox({ letter }) {
  return (
    <span className="inline-block mx-1 border-2 border-black dark:border-white uppercase text-lg md:text-2xl py-4 px-2 md:p-4 font-bold text-center">
      {letter}
    </span>
  )
}

export const WordRow = ({ letter = '' }) => {
  const lettersReaming = LETTER_LENGTH - letter.length
  const letters = letter.split('').concat(Array(lettersReaming).fill(''))

  return (
    <div className="px-1 max-w-lg mx-auto grid grid-cols-5 gap-2 md:gap-4 mb-4">
      {letters.map((letter, index) => (
        <LetterBox key={index} letter={letter} />
      ))}
    </div>
  )
}
