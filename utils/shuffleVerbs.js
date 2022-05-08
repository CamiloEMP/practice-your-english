import { diccionary } from 'constants/diccionary'

export const shuffleVerbs = ({ verbsRandom, setVerbsForGame, timesVerbFirst, timesVerbSecond }) => {
  const verbTensePairOne = verbsRandom.map(verb => {
    return {
      word: verb[diccionary[timesVerbFirst]],
      pairCorrect: verb[diccionary[timesVerbSecond]],
      matched: false,
    }
  })
  const verbTensePairTwo = verbsRandom.map(verb => {
    return {
      word: verb[diccionary[timesVerbSecond]],
      pairCorrect: verb[diccionary[timesVerbFirst]],
      matched: false,
    }
  })

  const shuffledVerbs = [...verbTensePairOne, ...verbTensePairTwo].sort(() => Math.random() - 0.5)

  setVerbsForGame([...shuffledVerbs])
}
