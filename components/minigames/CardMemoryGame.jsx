import { BsQuestionSquare as QuestionMark } from 'react-icons/bs'
export const CardMemoryGame = ({ verb, onChoise, isFlipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onChoise(verb)
    }
  }

  return (
    <article className="relative w-32 h-32 lg:w-44 lg:h-44">
      <div>
        <div
          className={` w-32 h-32 lg:w-44 lg:h-44 flex items-center justify-center ${
            isFlipped ? '' : 'hidden'
          }`}
        >
          <span className="text-2xl">{verb.word}</span>
        </div>
        <QuestionMark
          className={`w-full h-full text-emerald-500 cursor-pointer transition-transform hover:scale-105 duration-200 ${
            isFlipped ? 'hidden' : ''
          }`}
          onClick={handleClick}
        />
      </div>
    </article>
  )
}
