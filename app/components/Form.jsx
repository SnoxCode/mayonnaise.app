'use client'

import form from './form.module.css'

export default function Form() {

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      email: event.target.email.value,
    }

    const JSONdata = JSON.stringify(data)

    const endpoint = '/api/form'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()
    if (result.done == true) {
      const input = document.querySelector('input')
      const button = document.querySelector('button')

      input.setAttribute('disabled', '')
      button.setAttribute('disabled', '')

      input.style.backgroundColor = '#c03b17'
      input.style.color = '#13110e'
      input.value = ''
      input.placeholder = ''

      button.style.backgroundColor = '#d6d1b6'
      button.innerHTML = 'You joined the waitlist!'
    }

  }

  return (
    <form onSubmit={handleSubmit} className={form.form}>
      <input className={form.input}
        type='email'
        name='email'
        placeholder='you@mayonnaise.app'
        autoComplete='off'
        spellCheck='false'
        required
      />
      <button className={form.button} type='submit'>
        Join the waitlist.
      </button>
    </form>
  )
}