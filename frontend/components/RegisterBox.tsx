import { useApolloClient, useMutation } from '@apollo/react-hooks'
import cookie from 'cookie'
import gql from 'graphql-tag'
import { useRef } from 'react'
import redirect from '../lib/redirect'

const CREATE_USER = gql`
  mutation Create($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`

const RegisterBox = () => {
  const client = useApolloClient()

  const onCompleted = (data: any) => {
    // Store the token in cookie
    document.cookie = cookie.serialize('token', data.signup.token, {
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: '/' // make cookie available for all routes underneath "/"
    })
    // Force a reload of all the current queries now that the user is
    // logged in
    client.cache.reset().then(() => {
      redirect({}, '/')
    })
  }
  const onError = (error: any) => {
    // If you want to send error to external service?
    console.error(error)
  }
  const [create, { error }] = useMutation(CREATE_USER, {
    onCompleted,
    onError
  })

  const name: any | null = useRef(null)
  const email: any | null = useRef(null)
  const password: any | null = useRef(null)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()

        create({
          variables: {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
          }
        })

        name.current.value = email.current.value = password.current.value = ''
      }}
    >
      {error && <p>Issue occurred while registering :(</p>}
      <input name='name' placeholder='Name' ref={name} />
      <br />
      <input name='email' placeholder='Email' ref={email} />
      <br />
      <input
        name='password'
        placeholder='Password'
        ref={password}
        type='password'
      />
      <br />
      <button>Register</button>
    </form>
  )
}

export default RegisterBox
