import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useTokenDetails } from '../../hooks/useTokenDetails'
import { useTokenImage } from '../../hooks/useTokenImage'
import { LinkedOwner } from '../../components/Owner'
import Loader from '../../components/Loader'

const Token = () => {
  const router = useRouter()
  const { id: ids } = router.query

  const id = ids?.length > 0 ? (ids as string[]).join('/') : ids

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
        <h1>{token?.contract?.name}</h1>
        {loading && <Loader />}
        {error && (
          <div className="error">
            {error.name} {error.message}{' '}
            <button onClick={() => window.location.reload()}>Try again</button>
          </div>
        )}
        <h2>
          ${token?.contract?.symbol}: #{token?.identifier}
        </h2>
        <img src={image} />
        <div>
          Metadata URI:{' '}
          <a target="_blank" href={token?.uri}>
            {token?.uri}
          </a>
        </div>
        <div>
          Owner: <LinkedOwner address={token?.owner?.id} enclosingDigits={8} />
        </div>

        <h2>Previous owners</h2>
        <ul>
          {token?.transfers?.map((transfer) => (
            <li>
              <LinkedOwner address={transfer?.from?.id} enclosingDigits={8} />
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
