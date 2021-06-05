import { gql, useQuery } from '@apollo/client'

export const useNFTsOfOwner = ({ address }: { address: String }) => {
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
      variables: { address: address?.toLowerCase() },
    },
  )

  const nfts = data?.account?.tokens || []

  return { loading, error, nfts }
}
