const WORD_LENGTH = 5
const GUESS_LENGTH = 6

const boxStateStyles = {
  Miss: 'border-gray-600 bg-gray-600 text-white',
  Partial: 'border-yellow-500 bg-yellow-500 text-black',
  Match: 'border-green-600 bg-green-600 text-black',
}

export { WORD_LENGTH, boxStateStyles, GUESS_LENGTH }
