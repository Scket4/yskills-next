import { THelper, TInputStatus } from '@/src/types/input'
import React from 'react'

const validateEmail = (value: string) => {
  return value.match(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  )
}

export const useEmailValidation = (value: string): THelper => {
  if (!value)
    return {
      text: '',
      color: '' as TInputStatus,
    }
  const isValid = validateEmail(value)
  return {
    text: isValid ? 'Correct email' : 'Enter a valid email',
    color: isValid ? 'success' : 'error',
  }
}
