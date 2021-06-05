import Head from 'next/head'
import { useRouter } from 'next/router'

import { Form } from '../../components/Form'
import { Token } from '../../components/Token'
import { useNFTsOfOwner } from '../../hooks/useNFTsOfOwner'

const Owner = () => {
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
        <Form />
        {nfts.map((nft) => (
          <Token key={nft.id} {...nft} />
        ))}
      </main>
    </div>
  )
}

export default Owner
