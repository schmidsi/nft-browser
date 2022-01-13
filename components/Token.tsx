import Link from 'next/link'

import { useTokenImage } from '../hooks/useTokenImage'
import { Owner } from '../components/Owner'

export const Token = ({ id, uri, contract, identifier, owner }) => {
  const image = useTokenImage({ id, uri })

  return (
    <Link href={`/token/${id}`}>
      <a>
        <div className="holder">
          <div className="info">
            <div>
              ${contract?.symbol}: #{identifier}
            </div>
            <div className="owner">
              <Owner address={owner?.id} />
            </div>
          </div>

          {image && (
            <div className="image">
              <img src={image} />
            </div>
          )}
        </div>
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

          .holder {
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
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
            background-color: rgba(0, 0, 0, 0.8);
            color: white;
            font-size: 0.8em;
          }

          .owner {
            margin-top: 10px;
          }

          a:hover .info {
            z-index: 10;
          }

          .image {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 5;
            background-color: black;
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
