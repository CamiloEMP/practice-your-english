export const validateNewSentence = ({
  values,
  wordInfinitive,
  wordPastParticiple,
  wordPastSimple,
  setError,
}) => {
  if (values.infinitive === '' || values.pastParticiple === '' || values.pastSimple === '') {
    setError('Please fill all the fields')
  } else if (
    values.infinitive.includes(wordInfinitive) &&
    values.pastParticiple.includes(wordPastParticiple) &&
    values.pastSimple.includes(wordPastSimple)
  ) {
    return true
  } else {
    setError('Each sentence must include the verb with the respective tense')
  }

  return false
}
