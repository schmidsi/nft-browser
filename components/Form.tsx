import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const EthereumAddressRegEx = /^0x[a-fA-F0-9]{40}$/

export const Form = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({ mode: 'all' })
  const onSubmit = (data) => console.log(data)
  const address = watch('address')

  useEffect(() => {
    if (isDirty && address && !errors.address) {
      router.push(`/owner/${address}`)
    }
  }, [isDirty, errors, address])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Enter an ethereum address:
      <input
        type="text"
        {...register('address', { pattern: EthereumAddressRegEx, required: true })}
      ></input>
      <style jsx>{`
        form {
          width: 300px;
          position: relative;
          margin: 2em auto;
        }

        input {
          width: 100%;
          font-family: monospace;
        }
      `}</style>
    </form>
  )
}
