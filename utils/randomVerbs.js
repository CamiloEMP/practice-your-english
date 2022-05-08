export const randomVerbs = (originalVerbs, quantityVerbs) => {
  const verbsRandom = []

  while (verbsRandom.length < quantityVerbs) {
    if (originalVerbs.length === 0) {
      break
    }
    const randomVerb = originalVerbs[Math.floor(Math.random() * originalVerbs.length)]

    if (!verbsRandom.includes(randomVerb)) {
      verbsRandom.push(randomVerb)
    }
  }

  return verbsRandom
}
