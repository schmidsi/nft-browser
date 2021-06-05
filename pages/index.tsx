import Head from 'next/head'

import { useNFTs } from '../hooks/useNFTs'
import { Token } from '../components/Token'
import { Form } from '../components/Form'

const Home = () => {
  const { loading, error, nfts } = useNFTs({
    address: '0x546457BBddf5e09929399768ab5a9d588cb0334d',
  })

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
        {nfts.map((nft) => (
          <Token key={nft.id} {...nft} />
        ))}
      </main>
    </div>
  )
}

export default Home
