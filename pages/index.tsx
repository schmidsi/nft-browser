import Head from 'next/head'

import { useLastTradedNFTs } from '../hooks/useLastTradedNFTs'
import { Token } from '../components/Token'
import { Form } from '../components/Form'

const Home = () => {
  const { loading, error, nfts, blockNumber } = useLastTradedNFTs()

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
        <h1>Last 10 transferred NFTs:</h1>
        <p>It automatically refreshes every block. Last block: {blockNumber}</p>
        <div className="holder">
          {nfts.map((nft) => (
            <Token key={nft.transferId} {...nft} />
          ))}
        </div>
      </main>
      <style jsx>{`
        .holder {
          margin: 0 -10px;
        }
      `}</style>
    </div>
  )
}

export default Home
