import Head from 'next/head'

import { useLastTradedNFTs } from '../hooks/useLastTradedNFTs'
import { Token } from '../components/Token'
import { Form } from '../components/Form'
import Loader from '../components/Loader'

const Home = () => {
  const first = 20
  const { loading, error, nfts, blockNumber } = useLastTradedNFTs({ first })

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form />
        {error && <div className="error">{error}</div>}
        {loading ? (
          <Loader />
        ) : (
          <div>
            <h1>Last {first} transferred NFTs:</h1>
            <p>It automatically refreshes every block. Last block: {blockNumber}</p>
            <div className="holder">
              {nfts.map((nft) => (
                <Token key={nft.transferId} {...nft} />
              ))}
            </div>
          </div>
        )}
      </main>
      <style jsx>{`
        .holder {
          margin: 0 -10px;
        }
        .error {
          color: red;
        }
      `}</style>
    </div>
  )
}

export default Home
