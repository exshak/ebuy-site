import { FieldInputProps, FieldProps } from 'formik'
import React from 'react'

export const InputField = ({
  field,
  form: { errors, touched },
  ...props
}: FieldProps & FieldInputProps<any>) => {
  const errorMessage = touched[field.name] && errors[field.name]
  return (
    <div>
      <input {...field} {...props} />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}
