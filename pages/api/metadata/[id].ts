import gql from 'graphql-tag'
import fetch from 'cross-fetch'

import { initializeApollo } from '../../../apollo/client'

export default async function handler(req, res) {
  const { id } = req.query
  const apolloClient = initializeApollo()

  const result = await apolloClient.query({
    query: gql`
      query TokenDetails($id: String!) {
        token(id: $id) {
          id
          uri
        }
      }
    `,
    variables: { id },
  })

  if (result?.data?.token?.uri) {
    const response = await fetch(result?.data?.token?.uri.replace(' ', ''))
    const text = await response.text()

    try {
      const json = JSON.parse(text)
      return res.status(200).json(json)
    } catch (error) {
      return res.status(200).json({ error: error.message, image: text })
    }
  }

  return res.status(404).json(result?.token)
}
