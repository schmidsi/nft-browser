import { gql, useQuery } from '@apollo/client'
import Head from 'next/head'

const useNFTs = ({ address }: { address: String }) => {
  const { loading, error, data } = useQuery(
    gql`
      query NFTs($address: String!) {
        account(id: $address) {
          id
          tokens {
            id
            uri
            registry {
              symbol
              name
            }
          }
        }
      }
    `,
    {
      variables: { address: address.toLowerCase() },
    },
  )

  return { loading, error, data }
}

const Home = () => {
  const { loading, error, data } = useNFTs({
    address: '0x546457BBddf5e09929399768ab5a9d588cb0334d',
  })

  console.log({ loading, error, data })

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input type="text" value="0x546457BBddf5e09929399768ab5a9d588cb0334d"></input>
      </main>
      <style jsx>{`
        main {
          width: 300px;
          position: relative;
          margin: 2em auto;
        }

        input {
          width: 100%;
          font-family: monospace;
        }
      `}</style>
    </div>
  )
}

export default Home
