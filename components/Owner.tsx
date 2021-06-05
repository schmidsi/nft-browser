import Link from 'next/link'

export const Owner = ({ address }) => (
  <>
    <Link href={`/owner/${address}`}>
      <a>
        {address?.slice(0, 6)}...{address?.slice(-4)}
      </a>
    </Link>
    <style jsx>{`
      a {
        font-family: 'Roboto Mono';
      }
    `}</style>
  </>
)
