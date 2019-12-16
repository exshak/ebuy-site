import { useMutation } from '@apollo/react-hooks'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import gql from 'graphql-tag'
import React from 'react'
import redirect from '../../lib/redirect'
import { StyledButton } from '../Common/Button'
import { InputField } from '../Common/FormInput'
import { StyledCreatePost } from './styles'

const CREATE_POST = gql`
  mutation CREATE_POST(
    $title: String!
    $description: String!
    $location: String!
    $price: Int!
    $subcategoryId: ID!
    $image: String
    $imageLarge: String
    $published: Boolean
  ) {
    createPost(
      title: $title
      description: $description
      location: $location
      price: $price
      subcategoryId: $subcategoryId
      image: $image
      imageLarge: $imageLarge
      published: $published
    ) {
      id
    }
  }
`

export const CreatePost = ({ id }: any) => {
  const onCompleted = ({ createPost: { id } }: any) => {
    redirect({}, `/post?id=${id}`)
  }
  const onError = (error: any) => {
    // If you want to send error to external service?
    console.error(error)
  }
  const [create, { error }] = useMutation(CREATE_POST, {
    onCompleted,
    onError
  })

  return (
    <StyledCreatePost>
      <h1>Create Post</h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
          subcategoryId: id,
          location: '',
          image: '',
          imageLarge: '',
          price: 0,
          published: false
        }}
        // FIXME: add yup validation
        onSubmit={async (values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
          }, 400)
          values.published = true
          await create({
            variables: values
          })
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {error && <p>Issue occurred while creating post :(</p>}
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
            {/* <Field
              name='subcategoryId'
              component='select'
              style={{
                display: `block`
              }}
              required
            >
            <ErrorMessage name='subcategory' component='div' /> */}
            <Field
              type='file'
              name='image'
              placeholder='Image'
              component={InputField}
            />
            <ErrorMessage name='image' component='div' />
            <Field
              name='location'
              placeholder='Location'
              component={InputField}
              required
            />
            <ErrorMessage name='location' component='div' />
            <Field
              type='number'
              name='price'
              placeholder='Price'
              component={InputField}
              required
            />
            <ErrorMessage name='price' component='div' />
            <StyledButton type='submit' disabled={isSubmitting}>
              Create
            </StyledButton>
          </Form>
        )}
      </Formik>
    </StyledCreatePost>
  )
}
