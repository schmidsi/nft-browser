import Link from 'next/link'
import { useTokenImage } from '../hooks/useTokenImage'

export const Token = ({ id, uri, registry }) => {
  const image = useTokenImage(uri)

  return (
    <Link href={`/token/${id}`}>
      <a>
        {id} {registry.name}
        <img src={image} />
        <style jsx>{`
          a {
            position: relative;
            display: inline-block;
            height: 200px;
            width: 200px;
            margin: 10px;
            overflow: hidden;
            border: 1px solid grey;
            padding: 5px;
          }

          img {
            position: absolute;
            top: 0;
            left: 0;
            max-width: 100%;
            max-height: 100%;
          }
        `}</style>
      </a>
    </Link>
  )
}
