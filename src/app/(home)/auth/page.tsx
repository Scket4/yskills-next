'use client'
import React, { FormEvent, useState } from 'react'
import SignUp from '@/src/components/auth/SignUp'
import SignIn from '@/src/components/auth/SignIn'
import { Button, Input } from '@nextui-org/react'
import { THelper } from '@/src/types/input'
import { useEmailValidation } from '@/src/helpers/validation'

export default function AuthPage() {
  const [isFormComplete, setIsFormComplete] = useState(false)
  const [hasAccount, setHasAccount] = useState(false)
  const [emailValue, setEmailValue] = useState('')

  const [helper, setHelper] = useState<THelper>({} as THelper)

  React.useMemo(() => {
    setHelper(useEmailValidation(emailValue))
  }, [emailValue])

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    setIsFormComplete(true)
    if (emailValue === 'alex@mail.ru') setHasAccount(true)
  }

  const text = !isFormComplete
    ? "Let's start with email"
    : hasAccount
    ? 'Sign in to your account'
    : 'Create your account'

  let form

  if (!isFormComplete) {
    form = (
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onSubmitForm}>
          <div>
            <Input
              label="Email"
              placeholder="example@mail.com"
              fullWidth
              value={emailValue}
              required
              status={helper.color}
              color={helper.color}
              helperColor={helper.color}
              helperText={helper.text}
              type="email"
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>

          <div>
            <Button type="submit" style={{ width: '100%' }}>
              Continue
            </Button>
          </div>
        </form>
      </div>
    )
  } else if (hasAccount) {
    form = <SignIn />
  } else form = <SignUp />

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Yskills"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {text}
        </h2>
      </div>
      {form}
    </div>
  )
}
