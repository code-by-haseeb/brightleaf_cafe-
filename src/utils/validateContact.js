// Checks the contact form values.
// Returns an object of error messages, e.g. { email: 'Please enter a valid email.' }
// An empty object means the form is valid.
export function validateContact(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}
