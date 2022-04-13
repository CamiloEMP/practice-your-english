const validationIrregularVerbs = ({
  sentences,
  verbInfinitive,
  verbPastParticiple,
  verbPastSimple,
  setError,
}) => {
  if (
    sentences.infinitive === '' ||
    sentences.pastParticiple === '' ||
    sentences.pastSimple === ''
  ) {
    setError('Please fill all the fields')

    return
  } else if (
    sentences.infinitive.includes(verbInfinitive) &&
    sentences.pastParticiple.includes(verbPastParticiple) &&
    sentences.pastSimple.includes(verbPastSimple)
  ) {
    return true
  } else {
    setError('Each sentence must include the verb with the respective tense')

    return
  }
}

export default validationIrregularVerbs
