import Head from 'next/head'

import { useLastTradedNFTs } from '../hooks/useLastTradedNFTs'
import { Token } from '../components/Token'
import { Form } from '../components/Form'

const Home = () => {
  const { loading, error, nfts } = useLastTradedNFTs()

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
        <h1>Last transferred NFTs:</h1>
        <p>It automatically refreshes every block ...</p>
        {nfts.map((nft) => (
          <Token key={nft.transferId} {...nft} />
        ))}
      </main>
    </div>
  )
}

export default Home
