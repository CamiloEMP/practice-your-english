export const validateMemoryGame = (firstOption, secondOption) => {
  const defaultValue = 'Choose a one'

  if (firstOption === defaultValue || secondOption === defaultValue) {
    return true
  }

  return false
}
