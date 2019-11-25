import { useMutation, useQuery } from '@apollo/react-hooks'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import gql from 'graphql-tag'
import React from 'react'
import { InputField } from './InputField'

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

const ALL_CAT = gql`
  query ALL_CAT {
    subcategories {
      id
      name
    }
  }
`

export const CreatePost = () => {
  const [create, { error }] = useMutation(CREATE_POST, {})
  const { data } = useQuery(ALL_CAT)
  console.log(data)

  return (
    <div>
      <h1>Create Post</h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
          subcategory: '',
          location: '',
          image: '',
          imageLarge: '',
          price: 0
        }}
        // FIXME: add yup validation
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
            <Field
              name='subcategory'
              component='select'
              style={{
                display: `block`
              }}
              required
            >
              <option value=''>Select a Category</option>
              // FIXME: category selection
              {/* {data.subcategories.map(
                async (sub: any) =>
                  await (
                    <option key={sub.id} value={sub.id}>
                      {sub.name}
                    </option>
                  )
              )} */}
            </Field>
            <ErrorMessage name='subcategory' component='div' />
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
            <button type='submit' disabled={isSubmitting}>
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
