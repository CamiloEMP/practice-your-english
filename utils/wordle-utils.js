export const computeGuess = (guessString, answerString = '') => {
  const result = []

  if (guessString.length !== answerString.length) {
    return result
  }

  const answerArray = answerString.split('')
  const guessArray = guessString.split('')

  const answerLettersCount = {}

  guessArray.forEach((letter, index) => {
    const answerLetter = answerArray[index]

    if (answerLetter in answerLettersCount) {
      answerLettersCount[answerLetter]++
    } else {
      answerLettersCount[answerLetter] = 1
    }
    if (letter === answerArray[index]) {
      result.push('Match')
    } else if (answerArray.includes(letter)) {
      result.push('Partial')
    } else {
      result.push('Miss')
    }
  })

  result.forEach((currentResult, indexResult) => {
    if (currentResult !== 'Partial') {
      return
    }
    const guessLetter = guessArray[indexResult]

    answerArray.forEach((currentAnswer, indexAnswer) => {
      if (currentAnswer !== guessLetter) {
        return
      }
      if (result[indexAnswer] === 'Match') {
        result[indexResult] = 'Miss'
      }
      if (answerLettersCount[guessLetter] <= 0) {
        result[indexResult] = 'Miss'
      }
    })
    answerLettersCount[guessLetter]--
  })

  return result
}

export const getRandomWord = verbs => {
  const randomGroupWord = verbs[Math.floor(Math.random() * verbs.length)]
  const values = Object.values(randomGroupWord)
  const notSpanish = values.slice(0, 3)
  const word = notSpanish[Math.floor(Math.random() * notSpanish.length)]

  if (word.length <= 5) {
    return word
  } else {
    getRandomWord()
  }
}
