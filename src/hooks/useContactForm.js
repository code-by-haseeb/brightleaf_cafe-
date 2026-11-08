import { useState } from 'react'
import { validateContact } from '../utils/validateContact'

const EMPTY_FORM = { name: '', email: '', message: '' }

// A custom hook keeps the form logic (state, validation, submit)
// out of the Contact component, so the component only handles the UI.
export function useContactForm() {
  const [values, setValues] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const newErrors = validateContact(values)
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // In a real app you would send `values` to your backend API here.
      setSent(true)
      setValues(EMPTY_FORM)
    }
  }

  return { values, errors, sent, handleChange, handleSubmit }
}
