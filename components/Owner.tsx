import Link from 'next/link'

export const Owner = ({ address, enclosingDigits = 4 }) => (
  <span>
    {address?.slice(0, enclosingDigits + 2)}...{address?.slice(-enclosingDigits)}
    <style jsx>{`
      span {
        font-family: 'Roboto Mono';
      }
    `}</style>
  </span>
)

export const LinkedOwner = ({ address, enclosingDigits = 4 }) => (
  <Link href={`/owner/${address}`}>
    <a>
      <Owner address={address} enclosingDigits={enclosingDigits} />
    </a>
  </Link>
)
