import Link from 'next/link'

import { useTokenImage } from '../hooks/useTokenImage'
import { Owner } from '../components/Owner'

export const Token = ({ id, uri, registry, identifier, owner }) => {
  const image = useTokenImage({ id, uri })

  return (
    <Link href={`/token/${id}`}>
      <a>
        <div className="info">
          <div>
            ${registry?.symbol}: #{identifier}
          </div>
          <div className="owner">
            <Owner address={owner?.id} />
          </div>
        </div>

        <img src={image} />
        <style jsx>{`
          a {
            position: relative;
            display: inline-block;
            height: 200px;
            width: 200px;
            margin: 10px;
            overflow: hidden;
            text-align: center;
          }

          a:hover {
            box-shadow: 0 0 80px rgba(192, 219, 255, 0.48),
              0 0 32px rgba(65, 120, 255, 0.24);
          }

          .info {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            padding: 20px 5px;
            background-color: #151c42c0;
            font-size: 0.8em;
          }

          .owner {
            margin-top: 10px;
          }

          a:hover div {
            z-index: 10;
          }

          img {
            position: relative;
            max-width: 100%;
            max-height: 100%;
          }
        `}</style>
      </a>
    </Link>
  )
}
