import { useContext, useCallback } from 'react'
import { ContextOptions } from 'context/OptionsMinigamesContext'

export const useOptions = () => {
  const { options, setOptions } = useContext(ContextOptions)

  const setOptionsMinigame = useCallback(
    newOptions => {
      setOptions({
        ...newOptions,
      })
    },
    [setOptions],
  )

  return { isEmpty: Object.keys(options).length === 0, options, setOptionsMinigame }
}
