import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTokenDetails } from '../../hooks/useTokenDetails'
import { useTokenImage } from '../../hooks/useTokenImage'
import { Owner } from '../../components/Owner'

const Token = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, token } = useTokenDetails({
    id: id as string,
  })

  const image = useTokenImage(token)

  return (
    <div>
      <Head>
        <title>NFT Browser: Token</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{token?.registry?.name}</h1>
        <h2>
          ${token?.registry?.symbol}: #{token?.identifier}
        </h2>
        <img src={image} />
        <div>
          Metadata URI:{' '}
          <a target="_blank" href={token?.uri}>
            {token?.uri}
          </a>
        </div>
        <div>
          Owner: <Owner address={token?.owner?.id} />
        </div>

        <h2>Previous owners</h2>
        <ul>
          {token?.transfers?.map((transfer) => (
            <li>
              <Owner address={transfer?.from?.id} />
            </li>
          ))}
        </ul>
      </main>

      <style jsx>{`
        img {
          width: 300px;
        }
      `}</style>
    </div>
  )
}

export default Token
