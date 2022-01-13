import { gql, useQuery } from '@apollo/client'

export const useTokenDetails = ({ id }: { id: String }) => {
  const { loading, error, data } = useQuery(
    gql`
      query TokenDetails($id: String!) {
        erc721Token(id: $id) {
          id
          identifier
          owner {
            id
          }
          contract {
            id
            name
            symbol
          }
          uri
          transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
            id
            from {
              id
            }
            to {
              id
            }
            transaction {
              id
            }
          }
        }
      }
    `,
    {
      variables: { id: id?.toLowerCase() },
    },
  )

  const token = data?.erc721Token

  return { loading, error, token }
}
