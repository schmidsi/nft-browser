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
      <div className="image-holder">
        <img src="/img/search.png" />
      </div>
      Enter Ethereum address to check:
      <input
        type="text"
        defaultValue={initialAddress}
        placeholder="0xdeadbeef1337..."
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
          font-size: 14px;
          font-family: 'Roboto Mono';
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid #0c0a1d;
          color: #0c0a1d;
        }

        .image-holder {
          display: flex;
          justify-content: center;
          margin-bottom: 1em;
        }

        img {
          width: 66%;
        }
      `}</style>
    </form>
  )
}
