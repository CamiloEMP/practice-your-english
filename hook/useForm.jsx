import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e, cb) => {
    e.preventDefault()
    const notError = cb()

    if (notError) {
      setValues(initialState)
    }
  }

  return { values, handleChange, handleSubmit }
}
