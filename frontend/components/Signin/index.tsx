import { useApolloClient, useMutation } from '@apollo/react-hooks'
import cookie from 'cookie'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import gql from 'graphql-tag'
import redirect from '../../lib/redirect'
import { StyledButton } from '../Common/Button'
import { InputField } from '../Common/FormInput'
import { StyledSignin } from './styles'

const SIGN_IN = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
    }
  }
`

export const Signin = () => {
  const client = useApolloClient()
  const onCompleted = (data: any) => {
    // Store the token in cookie
    document.cookie = cookie.serialize('token', data.signin.token, {
      sameSite: true,
      path: '/',
      maxAge: 30 * 24 * 60 * 60 // 30 days
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
  const [signin, { error }] = useMutation(SIGN_IN, {
    onCompleted,
    onError
  })

  return (
    <StyledSignin>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        // FIXME: add yup validation
        validate={values => {
          const errors = {}
          if (!values.email) {
            // @ts-ignore
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            // @ts-ignore
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
          await signin({
            variables: values
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {error && <p>No user found with that information.</p>}
            <Field
              type='email'
              name='email'
              placeholder='Email'
              component={InputField}
            />
            <ErrorMessage name='email' component='div' />
            <Field
              type='password'
              name='password'
              placeholder='Password'
              component={InputField}
            />
            <ErrorMessage name='password' component='div' />
            <StyledButton type='submit' disabled={isSubmitting}>
              Sign In
            </StyledButton>
          </Form>
        )}
      </Formik>
    </StyledSignin>
  )
}
