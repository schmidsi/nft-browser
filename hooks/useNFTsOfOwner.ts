import { gql, useQuery } from '@apollo/client'

export const useNFTsOfOwner = ({ address }: { address: String }) => {
  const { loading, error, data } = useQuery(
    gql`
      query NFTs($address: String!) {
        account(id: $address) {
          id
          ERC721tokens {
            id
            identifier
            uri
            contract {
              symbol
              name
            }
          }
        }
      }
    `,
    {
      variables: { address: address?.toLowerCase() },
    },
  )

  const nfts = data?.account?.ERC721tokens || []

  return { loading, error, nfts }
}
