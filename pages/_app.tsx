import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo/client'
import Link from 'next/link'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

const Header = () => (
  <header>
    <Link href="/">
      <a>NFT Browser</a>
    </Link>
    <style jsx>{`
      a {
        background-color: transparent;
        font-size: 14px;
        font-weight: 600;
        text-shadow: 0 0 80px rgba(192, 219, 255, 0.48), 0 0 32px rgba(65, 120, 255, 0.24);
      }
    `}</style>
  </header>
)

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
