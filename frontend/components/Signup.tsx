import { useApolloClient, useMutation } from '@apollo/react-hooks'
import cookie from 'cookie'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import gql from 'graphql-tag'
import redirect from '../lib/redirect'
import { InputField } from './InputField'

const CREATE_USER = gql`
  mutation Create($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      token
    }
  }
`

export const Signup = () => {
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

  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
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
          await create({
            variables: values
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {error && <p>Issue occurred while registering :(</p>}
            <Field name='name' placeholder='Name' component={InputField} />
            <ErrorMessage name='name' component='div' />
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
            <button type='submit' disabled={isSubmitting}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
