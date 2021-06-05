import { gql, useQuery } from '@apollo/client'

export const useLastTradedNFTs = () => {
  const { loading, error, data } = useQuery(
    gql`
      {
        transfers(first: 50, orderBy: timestamp, orderDirection: desc) {
          id
          timestamp
          token {
            id
            identifier
            uri
            registry {
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
    data?.transfers?.map((transfer) => ({
      ...transfer.token,
      transferId: transfer.id,
    })) || []

  return { loading, error, nfts }
}
