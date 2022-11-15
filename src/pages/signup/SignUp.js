import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import styles from './SignUp.module.css'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [passsword, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, passsword, displayName)
  }
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      SignUp
      <label>
        <span>@username:</span>
        <input
          type='text'
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>
      <label>
        <span>email:</span>
        <input
          type='text'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
      </label>
      {!isPending && <button className='btn'>Create an account</button>}
      {isPending && (
        <button className='btn' disabled>
          Loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  )
}
