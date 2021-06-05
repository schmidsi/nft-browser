import { gql, useQuery } from '@apollo/client'

export const useLastTradedNFTs = () => {
  const { loading, error, data } = useQuery(
    gql`
      {
        transfers(first: 20, orderBy: timestamp, orderDirection: desc) {
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
