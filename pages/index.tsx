import Head from 'next/head'
import { Token } from '../components/Token'
import { useNFTs } from '../hooks/useNFTs'

const Home = () => {
  const { loading, error, nfts } = useNFTs({
    address: '0x546457BBddf5e09929399768ab5a9d588cb0334d',
  })

  console.log({ loading, error, nfts })

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input type="text" value="0x546457BBddf5e09929399768ab5a9d588cb0334d"></input>
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
