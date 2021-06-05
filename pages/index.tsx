import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Token } from '../components/Token'
import { useNFTs } from '../hooks/useNFTs'

const EthereumAddressRegEx = /^0x[a-fA-F0-9]{40}$/

const Home = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({ mode: 'all' })
  const onSubmit = (data) => console.log(data)
  const address = watch('address')
  console.log(watch('address'))

  const { loading, error, nfts } = useNFTs({
    address: '0x546457BBddf5e09929399768ab5a9d588cb0334d',
  })

  useEffect(() => {
    if (isDirty && address && !errors.address) {
      console.log('GO', address)
      router.push(`${address}`)
    }
  }, [isDirty, errors, address])

  console.log({ errors, isDirty })

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form onSubmit={handleSubmit(onSubmit)}>
          Enter an ethereum address:
          <input
            type="text"
            {...register('address', { pattern: EthereumAddressRegEx, required: true })}
          ></input>
        </form>
        {nfts.map((nft) => (
          <Token key={nft.id} {...nft} />
        ))}
      </main>
      <style jsx>{`
        main {
          width: 300px;
          position: relative;
          margin: 2em auto;
        }

        input {
          width: 100%;
          font-family: monospace;
        }
      `}</style>
    </div>
  )
}

export default Home
