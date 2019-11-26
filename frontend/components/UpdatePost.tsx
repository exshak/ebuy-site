import { useMutation } from '@apollo/react-hooks'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import gql from 'graphql-tag'
import React from 'react'
import redirect from '../lib/redirect'
import { InputField } from './InputField'

const UPDATE_POST = gql`
  mutation UPDATE_POST(
    $id: ID!
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $imageLarge: String
  ) {
    updatePost(
      id: $id
      title: $title
      description: $description
      price: $price
      image: $image
      imageLarge: $imageLarge
    ) {
      id
    }
  }
`

type Props = {
  id?: string
}

export const UpdatePost: React.FunctionComponent<Props> = ({ id }) => {
  const onCompleted = ({ updatePost }: any) => {
    redirect({}, `/post?id=${updatePost.id}`)
  }
  const onError = (error: any) => {
    // If you want to send error to external service?
    console.error(error)
  }
  const [update, { error }] = useMutation(UPDATE_POST, {
    onCompleted,
    onError
  })

  return (
    <div>
      <h1>Update Post</h1>
      <Formik
        initialValues={{
          id: id,
          title: '',
          description: '',
          image: '',
          imageLarge: '',
          price: 0
        }}
        // FIXME: add yup validation
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
          await update({
            variables: values
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {error && <p>Issue occurred while updating post :(</p>}
            <Field
              name='title'
              placeholder='Title'
              component={InputField}
              required
            />
            <ErrorMessage name='title' component='div' />
            <Field
              name='description'
              placeholder='Description'
              component='textarea'
              rows='3'
              required
            />
            <ErrorMessage name='description' component='div' />
            <Field
              type='file'
              name='image'
              placeholder='Image'
              component={InputField}
            />
            <ErrorMessage name='image' component='div' />
            <Field
              type='number'
              name='price'
              placeholder='Price'
              component={InputField}
              required
            />
            <ErrorMessage name='price' component='div' />
            <button type='submit' disabled={isSubmitting}>
              Update
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
