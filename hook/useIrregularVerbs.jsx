import { useEffect, useState } from 'react'

import { getListOfVerbs } from '../services/getListOfVerbs'

export const useIrregularVerbs = () => {
  const [loading, setLoading] = useState(true)
  const [verbs, setVerbs] = useState([])

  useEffect(() => {
    getListOfVerbs(setLoading).then(data => setVerbs(data))
  }, [])

  return { verbs, loading }
}
