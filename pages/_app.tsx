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
      }

      img {
        vertical-align: middle;
        margin-right: 10px;
      }
    `}</style>
  </header>
)

const Footer = () => (
  <footer>
    <a href="https://github.com/schmidsi/nft-browser" target="_blank">
      Github
    </a>
    <style jsx>{`
      a {
        font-size: 0.8em;
      }
    `}</style>
  </footer>
)

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  )
}
