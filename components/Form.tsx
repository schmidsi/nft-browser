import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const EthereumAddressRegEx = /^0x[a-fA-F0-9]{40}$/

export const Form = ({ initialAddress = '' }) => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    mode: 'all',
    defaultValues: {
      address: initialAddress,
    },
  })

  const onSubmit = (data) => console.log(data)
  const address = watch('address')

  useEffect(() => {
    if (isDirty && address && !errors.address) {
      router.push(`/owner/${address}`)
    }
  }, [isDirty, errors, address])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      Eyeball an Ethereum account 👀:
      <input
        type="text"
        defaultValue={initialAddress}
        {...register('address', { pattern: EthereumAddressRegEx, required: true })}
      ></input>
      <style jsx>{`
        form {
          width: 320px;
          position: relative;
          margin: 2em auto;
        }

        input {
          width: 100%;
          font-size: 12px;
          padding: 5px;
          font-family: 'Roboto Mono';
          background-color: rgba(255, 255, 255, 0.08);
          border: none;
          color: white;
        }
      `}</style>
    </form>
  )
}
