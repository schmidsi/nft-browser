import Head from 'next/head'
import { useRouter } from 'next/router'

import { Form } from '../../components/Form'
import Loader from '../../components/Loader'
import { Owner } from '../../components/Owner'
import { Token } from '../../components/Token'
import { useNFTsOfOwner } from '../../hooks/useNFTsOfOwner'

const OwnerPage = () => {
  const router = useRouter()
  const { address } = router.query

  const { loading, error, nfts } = useNFTsOfOwner({
    address: address as string,
  })

  return (
    <div>
      <Head>
        <title>NFT Browser: {address}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form initialAddress={address as string} />
        <h1>
          NFTs owned by <Owner address={address} />:
        </h1>
        {loading && <Loader />}
        {error && (
          <div className="error">
            {error.name} {error.message}{' '}
            <button onClick={() => window.location.reload()}>Try again</button>
          </div>
        )}
        {nfts.map((nft) => (
          <Token key={nft.id} {...nft} />
        ))}
      </main>
    </div>
  )
}

export default OwnerPage
