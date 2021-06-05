import { useEffect, useState } from 'react'
import fetch from 'cross-fetch'
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

  const nfts = data?.account?.tokens || []

  return { loading, error, nfts }
}

const Token = ({ id, uri, registry }) => {
  const [image, setImage] = useState('')

  useEffect(() => {
    if (uri) {
      fetch(uri).then(
        async (response) => {
          const text = await response.text()
          try {
            const json = JSON.parse(text)

            setImage(json.image || json.image_url)
            console.log('json', json)
          } catch (error) {
            console.log('text', text)
          }
        },
        (reason) => console.warn(reason),
      )
    }
  }, [uri])

  return (
    <div>
      {id} {registry.name}
      <img src={image} />
      <style jsx>{`
        div {
          position: relative;
          display: inline-block;
          height: 140px;
          width: 140px;
          margin: 5px;
          overflow: hidden;
        }

        img {
          position: absolute;
          top: 0;
          left: 0;
          max-width: 100%;
          max-height: 100%;
        }
      `}</style>
    </div>
  )
}

const Home = () => {
  const { loading, error, nfts } = useNFTs({
    address: '0x546457BBddf5e09929399768ab5a9d588cb0334d',
  })

  console.log({ loading, error, nfts })

  return (
    <div>
      <Head>
        <title>NFT Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <input type="text" value="0x546457BBddf5e09929399768ab5a9d588cb0334d"></input>
        {nfts.map((nft) => (
          <Token key={nft.id} {...nft} />
        ))}
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
