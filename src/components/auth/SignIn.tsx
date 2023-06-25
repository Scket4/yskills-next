import { Button, Input, useInput } from '@nextui-org/react'
import React, { FormEvent, useState } from 'react'
import { THelper } from '@/src/types/input'
import { useEmailValidation } from '@/src/helpers/validation'

export default function SignIn() {
  const { value, bindings } = useInput('')
  const [helper, setHelper] = useState<THelper>({} as THelper)

  React.useMemo(() => {
    setHelper(useEmailValidation(value))
  }, [value])

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault()
    console.log('`onSubmitForm` ran')
  }
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={onSubmitForm}>
        <div>
          <Input
            {...bindings}
            label="Email"
            placeholder="example@mail.com"
            fullWidth
            required
            status={helper.color}
            color={helper.color}
            helperColor={helper.color}
            helperText={helper.text}
            type="email"
          />
        </div>

        <div>
          <Input.Password
            label="Password"
            placeholder="Password123"
            fullWidth
            required
          />
        </div>

        <div>
          <Button type="submit" style={{ width: '100%' }}>
            Sign In
          </Button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a
          href="#"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Start a 14 day free trial
        </a>
      </p>
    </div>
  )
}
