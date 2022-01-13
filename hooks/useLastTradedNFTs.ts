import { gql, useQuery } from '@apollo/client'

export const useLastTradedNFTs = () => {
  const { loading, error, data } = useQuery(
    gql`
      {
        erc721Transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
          id
          timestamp
          token {
            id
            identifier
            uri
            contract {
              symbol
              name
            }
            owner {
              id
            }
          }
        }
      }
    `,
    { pollInterval: 5000 },
  )

  const nfts =
    data?.erc721Transfers?.map((transfer) => ({
      ...transfer.token,
      transferId: transfer.id,
    })) || []

  return { loading, error, nfts }
}
