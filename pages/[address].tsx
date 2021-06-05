import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import { Token } from '../components/Token'
import { useNFTs } from '../hooks/useNFTs'

const Home = () => {
  const router = useRouter()
  const { address } = router.query

  console.log({ address }, router.query)

  const { loading, error, nfts } = useNFTs({
    address: address as string,
  })

  console.log({ loading, error, nfts })

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input type="text" value={address}></input>
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
