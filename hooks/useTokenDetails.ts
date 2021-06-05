import { gql, useQuery } from '@apollo/client'

export const useTokenDetails = ({ id }: { id: String }) => {
  const { loading, error, data } = useQuery(
    gql`
      query TokenDetails($id: String!) {
        token(id: $id) {
          id
          identifier
          owner {
            id
          }
          registry {
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

  const token = data?.token

  return { loading, error, token }
}
