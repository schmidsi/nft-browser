import { gql, useQuery } from '@apollo/client'

export const useLastTradedNFTs = ({ first }) => {
  const { loading, error, data } = useQuery(
    gql`
      query LastTransfers($first: Int!) {
        erc721Transfers(first: $first, orderBy: timestamp, orderDirection: desc) {
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
        _meta {
          block {
            number
          }
        }
      }
    `,
    { pollInterval: 5000, variables: { first } },
  )

  const nfts =
    data?.erc721Transfers?.map((transfer) => ({
      ...transfer.token,
      transferId: transfer.id,
    })) || []

  const blockNumber = data?._meta?.block?.number || null

  return { loading, error, nfts, blockNumber }
}
