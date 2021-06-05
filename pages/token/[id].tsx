import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTokenDetails } from '../../hooks/useTokenDetails'
import { useTokenImage } from '../../hooks/useTokenImage'

const Token = () => {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, token } = useTokenDetails({
    id: id as string,
  })

  const image = useTokenImage(token?.uri)

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
          Owner:{' '}
          <Link href={`/owner/${token?.owner?.id}`}>
            <a>{token?.owner?.id}</a>
          </Link>
        </div>

        <h2>Previous owners</h2>
        <ul>
          {token?.transfers?.map((transfer) => (
            <li>
              {' '}
              <Link href={`/owner/${transfer?.from?.id}`}>
                <a>{transfer?.from?.id}</a>
              </Link>
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
